import httpAxios from "../httpAxios";

async function getAll(status, limit, page) {
  return await httpAxios.get(`product/index/${status}/${limit}/${page}`);
}
async function getByCategory(id, limit) {
  return await httpAxios.get(`getProducts/${id}/${limit}`);
}
async function getLatestProducts(limit) {
  return await httpAxios.get(`getLatestProducts/${limit}`);
}
async function getProductBySlug(category, slug) {
  return await httpAxios.get(`/product/getProductBySlug/${category}/${slug}`);
}
async function getProductsByCatAndBrand(
  parent,
  child,
  brands,
  page = 1,
  limit
) {
  return await httpAxios.post(
    `/product/getProductsByCatAndBrand/${parent}/${child}/${page}/${limit}`,
    brands
  );
}
async function getLatest($limit, $status = 1) {
  return await httpAxios.get(`product/getLatestProduct/${$limit}/${$status}`);
}
async function getById(id) {
  return await httpAxios.get(`product/show/${id}`);
}
async function create(product) {
  return await httpAxios.post("product/store", product);
}
async function remove($id) {
  return await httpAxios.delete(`product/destroy/${$id}`);
}
async function update(product, id) {
  return await httpAxios.post(`product/update/${id}`, product);
}

const productservice = {
  getAll: getAll,
  getProductBySlug: getProductBySlug,
  getLatestProducts: getLatestProducts,
  getProductsByCatAndBrand: getProductsByCatAndBrand,
  getByCategory: getByCategory,
  getLatest: getLatest,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default productservice;
