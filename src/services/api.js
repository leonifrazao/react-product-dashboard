const BASE_URL = "https://dummyjson.com";

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, options);

  if (!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`);
  }

  return await response.json();
}

const api = {
  listarProdutos() {
    return request("/products");
  },

  buscarProdutoPorId(id) {
    return request(`/products/${id}`);
  },

  buscarProdutosPorTexto(texto) {
    return request(`/products/search?q=${encodeURIComponent(texto)}`);
  },

  listarCategorias() {
    return request("/products/categories");
  },

  buscarProdutosPorCategoria(categoria) {
    return request(`/products/category/${categoria}`);
  },
};

export default api;
