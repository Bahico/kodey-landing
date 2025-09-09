import axios from "axios";
import {API_URL} from "@/api/api.constans";

export function getApi(url: string) {
    return `${API_URL}${url}`;
}

export function getAxios(url: string, params?: any) {
    return axios.get(getApi(url), {params: params});
}

export function photoUrl(url: string) {
    return `${API_URL}uploads/${url}`;
}