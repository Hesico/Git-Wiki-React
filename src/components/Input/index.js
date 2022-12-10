import { InputContainer } from "./styles"
import searchIcon from "../../assets/search.png"

export default function Input({onButtonClick, value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange}/>
        <button onClick={onButtonClick}><img src={searchIcon} alt="Procurar"/></button>
    </InputContainer>
  )
}
