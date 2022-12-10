import { useState } from "react";
import gitLogo from "../assets/github.png"
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import {Container} from "./styles"
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
      }else{
        alert('Repositório já cadastrado!')
      }
      return;
    }

    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) => setRepos(prev => prev.filter(repo => repo.id !== id));

    return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input onButtonClick={handleSearchRepo} value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
