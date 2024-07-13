import "./MyForm.css";

const MyForm = () => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // 8 - textarea 
    const [bio, setBio] = useState('');

    // 9 - select
    const [role, setRole] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    // 5 - envio de form 
    const handleSubmit = (e) => {
        e.preventDefault();

        //validação

        //envio

        // 7 - limpar form

        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

    return <>
        {/* 1 - criacao form */}
        {/* 5 - envio de formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    onChange={handleName}
                    value={name}
                />
            </div>
            <input type="submit" value="Enviar" />
        </form>
        {/* 2 - label envolvendo input */}
        <label>
            <span>E-mail:</span>
            <input 
                type="text" 
                name="email" 
                placeholder="Digite o seu e-mail"
                // 4 - simplificando manipulacao
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
        </label>
        {/* 8 - textarea */}
        <label>
            <span>Bio:</span>
            <textarea 
                name="bio" 
                placeholder="Descrição do usuário"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
            >

            </textarea>
        </label>
        {/* 9 - select */}
        <label>
            <span>Função no sistema</span>
            <select 
                name="role" 
                onChange={(e) => setRole(e.target.value)} 
                value={role}
            >
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
            </select>
        </label>
        <input type="submit" value="Enviar" />
    </>
}

export default MyForm