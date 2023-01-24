const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");


//Eventos//

function generateQrCode(){
    const qrCodeInputValue = qrCodInput.value;

    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando Código...";

    qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código Criado!";  
    })
}
    qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
    })

    qrCodInput.addEventListener("keydown", (e) => {
        if (e.code=== "Enter") {
            generateQrCode();
        }

        })

        qrCodInput.addEventListener("keyup", () => {
            if (qrCodInput.value) {
                container.classList.remove("active");
                qrCodeBtn.innerText = "Gerar QR Code";

            }
        })