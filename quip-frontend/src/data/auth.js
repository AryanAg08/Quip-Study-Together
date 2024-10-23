import axios from "axios";

export async function login(creds) {
  return axios.post('http://localhost:5001/auth/login', creds);
}
