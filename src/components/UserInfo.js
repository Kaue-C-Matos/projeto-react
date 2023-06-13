import "./UserInfo.css"

const UserInfo = ({users}) =>{
    return(
        <div className="userContainer">
            {users.map(User =>(
                <h3>Nome: {User.name}, Data de nascimento: {User.birthday}, e-mail: {User.email} </h3>
            ))}
        </div>
    )
}

export default UserInfo