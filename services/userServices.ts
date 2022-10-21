import axios from "axios";

const UserServices = {
  register: async (params: object) => await axios.post("/api/register", params),
  login: async (params: object) => await axios.post("/api/login", params),
  deleteUser: async (id: string) => await axios.post(`/api/user/delete/${id}`),
  updateUser: async (params: object, id: string) =>
    await axios.put(`/api/user/update/${id}`, params),
};

export default UserServices;
