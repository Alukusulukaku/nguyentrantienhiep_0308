import httpAxios from "../httpAxios";

async function getAll(limit, page) {
  return await httpAxios.get(`category/index/${limit}/${page}`);
}
async function All(limit, page) {
  return await httpAxios.get(`category/all`);
}
async function getById(id) {
  return await httpAxios.get(`category/show/${id}`);
}
async function create(category) {
  return await httpAxios.post("category/store", category);
}
async function remove($id) {
  return await httpAxios.delete(`category/destroy/${$id}`);
}
async function update(category, id) {
  return await httpAxios.post(`category/update/${id}`, category);
}
const categoryservice = {
  getAll: getAll,
  All: All,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default categoryservice;
