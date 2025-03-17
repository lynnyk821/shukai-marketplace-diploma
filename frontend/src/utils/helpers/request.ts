export const request = async <T>(
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    body?: any,
    token?: string,
) => {
    const url = `${BACKEND_URL}/${endpoint}`;

    const methods = { GET: axios.get, POST: axios.post, PUT: axios.put, DELETE: axios.delete };

    const methodFunc = methods[method] || (() => {
        throw new Error(`Unsupported HTTP method: ${method}`);
    });

    const headers: Record<string, string> = token
        ? { Authorization: `Bearer ${token}` }
        : {};

    if (body instanceof FormData) {
        headers["Content-Type"] = "multipart/form-data";
    } else if (body) {
        headers["Content-Type"] = "application/json";
    }

    try {
        const response = ["GET", "DELETE"].includes(method)
            ? await methodFunc(url, { headers })
            : await methodFunc(url, body, { headers });

        return {
            data: response.data,
            status: response.status,
        } as T
    } catch (e) {
        return {
            data: (e as any).response.data,
            status: (e as any).status,
        } as T
    }
}
import {BACKEND_URL} from "../../globals-env.ts";

import axios from "axios";
