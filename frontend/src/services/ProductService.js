import httpAxios from "../httpAxios";

async function getAll(status, limit, page) {
  return await httpAxios.get(`product/index/${status}/${limit}/${page}`);
}
async function getByCategory(limit) {
  return await httpAxios.get(`getProducts/${limit}`);
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
  getByCategory: getByCategory,
  getLatest: getLatest,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default productservice;
