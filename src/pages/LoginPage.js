import { useState } from "react";
import Input from "../components/Input";
import "./LoginPage.css"

const LoginPage = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [checked, setChecked] = useState(false)
    const [input, setInput] = useState("password")

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }

    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    }

    const showPassword =() =>{
        if (checked) {
            setChecked(!checked)
            setInput("text")
        }
        else{
            setChecked(checked)
            setInput("password")
        }
    }
 
    const onSubmit = () =>{
        console.log(email, password)
    }
    

    return (
        <div className="container">
            <div className="formContainer">
                <Input 
                    label="email"
                    name="emailInput"
                    value={email}
                    onChange={onChangeEmail}
                />
                <Input
                    label="password"
                    type={input}
                    name="passwordInput"
                    value={password}
                    onChange={onChangePassword}
                />
                <label>mostrar senha
                <input type="checkbox"
                        checked={checked}
                        onChange={showPassword}
                />
                </label>

                <button onClick={onSubmit}>Entrar</button>

            </div>
        </div>
        
    );
}

export default LoginPage;