import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus","Pedro","Josias"]);

    const [users, setUsers] = useState([
        {id: 1 , name: "Matheus", age: 31},
        {id: 2 , name: "Jose", age: 22},
        {id: 3 , name: "Carlos", age: 11},
    ]);

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) =>
             prevUsers.filter((user) => randomNumber !== user.id
        ));
    }

    return <>
        {/* 4 - render sem key */}
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
        {/* 5 -  render com key  */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
        {/* 6 - previous state */}
        <button onClick={deleteRandom}>Delete random user</button>
  </>
}

export default ListRender