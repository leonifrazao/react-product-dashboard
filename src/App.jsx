import api from "./services/api";
import { useEffect, useState } from "react";
import CardProduto from "./components/CardProduto";

function App() {
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
    <div>
      <h1>Produtos</h1>
      {produtos.map((produto) => (
        <CardProduto key={produto.id} produto={produto} />
      ))}
    </div>
  );
}

export default App;
