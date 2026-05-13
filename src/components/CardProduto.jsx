function CardProduto({ produto }) {
  return (
    <div className="card-produto">
      <div width="200px" height="300px">
        <img src={produto.thumbnail} alt={produto.description}></img>
      </div>

      <h2>{produto.title}</h2>
      <p>Valor: {produto.price}</p>
      <p>Avaliacao: {produto.rating}</p>
      <p>
        In Stock: {produto.availabilityStatus === "In Stock" ? "True" : "False"}
      </p>

      <button>Ver Detalhes</button>
    </div>
  );
}

export default CardProduto;
