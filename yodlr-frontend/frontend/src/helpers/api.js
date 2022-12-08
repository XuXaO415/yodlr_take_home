import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

class YodlrApi {

    static token;

    static async request(endpoint, data = {}, verb = "get") {

        console.debug("API Call:", endpoint, data, verb);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = {
            Authorization: `Bearer ${YodlrApi.token}`
        };
        const params = (method === "get") ? data : {};

        try {
            return (await axios({
                url,
                method,
                data,
                params,
                headers
            })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API routes modeled after Jobly API

    // GET /users
    static async getUsers() {
        let res = await this.request(`users`);
        return res.users;
    }

    // POST /users
    static async createUser(data) {
        let res = await this.request(`users`, data, "POST");
        return res.user;
    }

    // GET /users/:id
    static async getUser(id) {
        let res = await this.request(`users/${id}`);
        return res.user;
    }

    // PUT /users/:id
    static async updateUser(id, data) {
        let res = await this.request(`users/${id}`, data, "PUT");
        return res.user;
    }

    // DELETE /users/:id
    static async deleteUser(id) {
        await this.request(`users/${id}`, {}, "DELETE");
    }

    // POST login user
    static async loginUser(data) {
        let res = await this.request(`auth/token`, data, "POST");
        this.token = res.token;
        return res.token;
    }
}

export default YodlrApi;