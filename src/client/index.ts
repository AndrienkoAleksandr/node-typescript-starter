import { Person, PersonUrl } from "../common/entity";
import { AxiosInstance } from "axios";

const axios: AxiosInstance = require("axios");

doGetRequest<Person>(PersonUrl).then(person => {
    console.log(person);
})

async function doGetRequest<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        axios.request<T>({
            method: 'GET',
            url: url
        }).then(t => {
            resolve(t.data);
        }).catch(err => {
            reject(err);
        });
    });
}