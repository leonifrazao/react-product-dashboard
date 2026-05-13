import api from "../services/api";
import { useEffect, useRef, useState } from "react";
import CardProduto from "../components/CardProduto";
import "../App.css";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        setLoading(true);
        setErro(null);
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

  async function realizarPesquisa() {
    try {
      setLoading(true);
      setErro(null);
      const dados = await api.buscarProdutosPorTexto(inputRef.current.value);
      setProdutos(dados.products);
    } catch (erro) {
      setErro(erro.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <div>
        <input
          ref={inputRef}
          type="text"
          id="produto-input"
          placeholder="Digite seu produto"
        ></input>
        <button onClick={realizarPesquisa}>Pesquisar</button>
      </div>
      <h1>Produtos</h1>
      {produtos.length === 0 ? (
        <p>Nenhum produto encontrado</p>
      ) : (
        <div className="produtos-grid">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Produtos;
