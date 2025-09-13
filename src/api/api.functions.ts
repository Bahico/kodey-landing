import axios from "axios";
import {API_URL, LOCALE} from "@/api/api.constans";

export function getApi(url: string) {
    return `${API_URL}${url}`;
}

export function getAxios(url: string, params: any = {}) {
    return axios.get(getApi(url), {params: {...params, language: LOCALE}});
}

export function postAxios(url: string, data: any, params: any = {}) {
    return axios.post(getApi(url), data, {params: {...params, language: LOCALE}});
}

export function photoUrl(url: string) {
    return `${API_URL}uploads/${url}`;
}