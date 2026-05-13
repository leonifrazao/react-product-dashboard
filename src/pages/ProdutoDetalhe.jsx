import { Link, useParams } from "react-router-dom";
import api from "../services/api";
import { useEffect, useState } from "react";

function ProdutoDetalhe() {
  const { id } = useParams();

  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function carregarProduto() {
      try {
        setLoading(true);
        setError(null);
        const dados = await api.buscarProdutoPorId(id);
        setProduto(dados);
      } catch (erro) {
        setError(erro.message);
      } finally {
        setLoading(false);
      }
    }

    carregarProduto();
  }, [id]);

  if (loading) {
    return <p>Carregando produto...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <main>
      <h1>{produto.title}</h1>
      <img src={produto.thumbnail} alt={produto.title} />
      <p>{produto.description}</p>
      <p>Preço: R$ {produto.price}</p>
      <p>Estoque: {produto.stock}</p>
      <Link to="/produtos">
        <button>Voltar</button>
      </Link>
    </main>
  );
}

export default ProdutoDetalhe;
