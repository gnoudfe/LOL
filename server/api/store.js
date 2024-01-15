export default defineEventHandler(async (event) => {
  const { data } = await useFetch("https://fakestoreapi.com/products");

  return data;
});
