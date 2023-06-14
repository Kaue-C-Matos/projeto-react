import { useState } from "react"


const InputText = () =>{
    const [name, setName] = useState("")

    const showName = (e) =>{
        return(<p>dhbxsjhnx</p>)
    }

    return(
        <div>
            <form>
                <label>Digite algo: 
                    <input
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </label>
            </form>
            <button onClick={showName}>Clique aqui</button>
        </div>
    )
}

export default InputText