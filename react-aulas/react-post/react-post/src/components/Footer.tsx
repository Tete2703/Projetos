import { usePosts } from "@/contexts/PostContext"

export const Footer = () => {
    const postCtx = usePosts();
    return (
        <div>
           <footer>
            Total de Post: {postCtx?.posts.length}
            </footer> 
        </div>
    )
}