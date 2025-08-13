import axios from "axios";

export function setupApiClient() {
    const api = axios.create({
        baseURL:'http://localhost:333'
    })
    return api;
}