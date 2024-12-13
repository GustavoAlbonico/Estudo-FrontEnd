import blogFetch from "../../axios/config";
import { useNavigate, useParams } from "react-router-dom";
import "./EditPost.css";
import { useEffect, useState } from "react";

const EditPost = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const {id} = useParams();

    const getPost = async () => {
        try {
            const response = await blogFetch.get(`/posts/${id}`);
            const data = response.data;
            
            setTitle(data.title);
            setBody(data.body);
        } catch (error) {
            console.log(error)
        }
    }

    const editPost = async (e) => {
        e.preventDefault();

        const post = {title, body, userId: 1}

        await blogFetch.put(`/posts/${id}`,{
            body: post,
        });

        navigate("/");
    };

    useEffect(() => {
        getPost();
    },[]);

    return (
        <div className='new-post'>
            <h2>Editando: {title}</h2>
            <form onSubmit={(e) => editPost(e)}>
                <div className="form-control">
                    <label htmlFor="title">Titulo:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Digite o título"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title || ""}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Conteúdo:</label>
                    <textarea
                        type="text"
                        name="body"
                        id="body"
                        placeholder="Digite o conteúdo"
                        onChange={(e) => setBody(e.target.value)}
                        value={body || ""}
                    />
                </div>
                <input type="submit" value="Editar Post" className="btn" />
            </form>
        </div>
    )
}

export default EditPost