// Fetching Products

exports.fetchProducts = async () => {
  try {
    const res = await fetch('http://localhost:5000/products', {
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