import "./UserInfo.css"

const UserInfo = ({name, birthday, email}) =>{
    return(
        <div className="userContainer">
            <h3>Nome: {name}, Data de nascimento: {birthday}, e-mail: {email} </h3>
        </div>
    )
}

export default UserInfo