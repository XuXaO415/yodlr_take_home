import axios from 'axios';
//for /users, that create an API endpoint that gets all users and returns an array of users
//then we can use this array of users to display them in the frontend 
//then create an HTTP POST: creates a new user, returns the created user data 

//for /users/:id
// HTTP GET: returns the user with given id(numeric, auto - incrementing).HTTP 404
// if user not found
// HTTP PUT: updates the user with given id and returns updated record.HTTP 404
// if user not fund.
// HTTP DELETE: removes the users with given id, returns nothing(HTTP 204)

// let's create a function that will return an axios instance
// that will be configured to talk to our API
// we will pass in the baseURL as a parameter
// and then we can use this function to create an instance of axios

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

class YodlrApi {
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
        let res = await this.request(`users`, data, "post");
        return res.user;
    }

    // GET /users/:id
    static async getUser(id) {
        let res = await this.request(`users/${id}`);
        return res.user;
    }

    // PUT /users/:id
    static async updateUser(id, data) {
        let res = await this.request(`users/${id}`, data, "put");
        return res.user;
    }

    // DELETE /users/:id
    static async deleteUser(id) {
        await this.request(`users/${id}`, {}, "delete");
    }
}

export default YodlrApi;