import httpAxios from "../httpAxios";

async function getAll(type, limit, page) {
  return await httpAxios.post(`order/index/${limit}/${page}`, type);
}
async function getById(id) {
  return await httpAxios.get(`order/show/${id}`);
}
async function create() {}
async function remove(id) {
  return await httpAxios.delete(`order/destroy/${id}`);
}
async function update() {}

const orderservice = {
  getAll: getAll,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default orderservice;
