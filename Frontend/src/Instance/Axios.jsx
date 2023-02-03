import axios from "axios"


export const axiosAdminInstance = axios.create({
    baseURL: "http://localhost:8080/admin"
})

export const axiosShopkeeperInstance = axios.create({
    baseURL: "http://localhost:8080/shopkeeper"
})

