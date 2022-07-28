import axios from "axios"

const axiosApi = axios.create({
    baseURL: "http://api.fidelity.local"
})

export async function get(url) {

    return await
        axiosApi.get(url, { crossDomain: true }).then(response => {

            return response.data

        }).catch(error => {
            return { statusCode: error?.response?.status }
        })
}