import { useNavigate, useParams } from "react-router-dom";
import "./EditPost.css";
import { useState } from "react";

const EditPost = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const {id} = useParams();

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
                    />
                </div>
                <input type="submit" value="Criar Post" className="btn" />
            </form>
        </div>
    )
}

export default EditPost