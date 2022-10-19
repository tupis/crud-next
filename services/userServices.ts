import axios from "axios";

const UserServices = {
  register: async (params: object) => await axios.post("/api/register", params),
  login: async (params: object) => await axios.post("/api/login", params),
  deleteUser: async (id: string) => await axios.post(`/api/user/name/${id}`),
  updateName: async (params: object, id: string) =>
    await axios.post(`/api/user/name/${id}`, params),
  updatePassword: async (params: object, id: string) =>
    await axios.post(`/api/user/name/${id}`, params),
};

export default UserServices;
