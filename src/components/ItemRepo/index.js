import { ItemContainer , Row, LinkContainer } from './styles';
import excluir from "../../assets/excluir.png"

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer>
        <Row>
            <h3>{repo.name}</h3>
            <button href="#"  rel="noreferrer" className="remover" onClick={handleRemove}><img src={excluir} alt="Remover"/></button>
        </Row>
        <p>{repo.full_name}</p>
        <LinkContainer>
            <a href={repo.html_url} rel="noreferrer" target="_blank">Go to page</a><br />
        </LinkContainer>
    </ItemContainer>
  )
}

export default ItemRepo;