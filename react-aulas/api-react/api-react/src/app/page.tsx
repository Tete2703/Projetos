"use client"

import { useEffect, useRef, useState } from "react";
import { json } from "stream/consumers";
import { User } from "./types/User";

const Page = () => {
  const [legendInput, setLegendInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileSend = async() => {
    if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
      const fileItem = fileInputRef.current.files[0];
      const allowed = ['image/jpg', 'image/jpeg', 'image/png'];
      if (allowed.includes(fileItem.type)) {
        const data = new FormData();
        data.append('image', fileItem );
        data.append('legend', legendInput);
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers:{
            'content-type': 'multipart/form-data'
          },
          body: data
        });
        const json = await res.json();
      }
  } else {
    alert("Selecione um Arquivo!")
  }
  }
    
  
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mt-4">Uploud de Imagem</h1>
      <div className="max-w-md flex flex-col gap-3 border border-dotted border-black p-3 mt-4">
      <input type="file" />
      <input type="text" placeholder="Digite uma legenda" className="p-3 bg-gray-300 rounded-md text-black" value={legendInput}
      onChange={e => setLegendInput(e.target.value)} />

      <button onClick={handleFileSend}>Enviar Imagem</button>
      </div>
    </div>
  )
}

export default Page;