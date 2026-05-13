import api from "../services/api";
import { useEffect, useState } from "react";
import CardProduto from "../components/CardProduto";
import "../App.css";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const dados = await api.listarProdutos();
        setProdutos(dados.products);
      } catch (erro) {
        setErro(erro.message);
      } finally {
        setLoading(false);
      }
    }

    carregarProdutos();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (erro) {
    return <p>Erro...</p>;
  }

  return (
    <main>
      <h1>Produtos</h1>
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </main>
  );
}

export default Produtos;
