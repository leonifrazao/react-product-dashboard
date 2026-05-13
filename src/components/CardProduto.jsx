import { Link } from "react-router-dom";

function CardProduto({ produto }) {
  return (
    <div className="card-produto">
      <div width="200px" height="300px">
        <img src={produto.thumbnail} alt={produto.description}></img>
      </div>

      <h2>{produto.title}</h2>
      <p>Valor: {produto.price}</p>
      <p>Avaliacao: {produto.rating}</p>
      <p>Estoque: {produto.stock}</p>
      <Link to={`/produtos/${produto.id}`}>
        <button>Ver Detalhes</button>
      </Link>
    </div>
  );
}

export default CardProduto;
