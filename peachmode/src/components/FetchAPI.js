// Fetching Products

const fetchProducts = async () => {
  try {
    const res = await fetch('https://peachmode-server.onrender.com/products', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
    return await res.json();
  } catch (error) {
    throw new Error(error);
  }
}

export default fetchProducts;
