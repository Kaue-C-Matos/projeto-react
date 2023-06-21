import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./UserList.css"

const UserList = () => {
    const [userData, setUserData] = useState([])

    const fetchUserData = useCallback(async ()=>{
        try {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos")
            setUserData(data)
        } catch (error) {
            console.error(error)
        }
    })

    useEffect(()=>{
        fetchUserData()
    }, [])

    return (
        <div className="container">
            <h3>Dados dos usuários</h3>
            {userData.map(user=>(
                <div className="userContainer">
                    <h4>Id do usuário: {user.userId}</h4>
                    <h4>ID: {user.id}</h4>
                    <h4>Título: {user.title}</h4>
                    <h4>Completo: {user.completed ? "Não" : "Sim"}</h4>
                </div>
            ))}

        </div>
    );
}

export default UserList;