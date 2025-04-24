import axios from "axios";
import {BACKEND_URL} from "../../../../../../globals-env.ts";

const endpoints: any = {
    novaposhta: {
        cities: (partName: string) => `${BACKEND_URL}/catalogue-service/api/region?partName=${partName}`,
        warehouses: (cityRef: string) => `${BACKEND_URL}/order-service/api/novaposhta/warehouses?cityRef=${cityRef}`
    },
};

export const fetchCities = async (partName: string) => {
    const response = await axios.get(endpoints.novaposhta.cities(partName));
    return response.data;
};

export const fetchWarehouses = async (cityRef: string) => {
    const response = await axios.get(endpoints.novaposhta.warehouses(cityRef));
    return response.data;
};