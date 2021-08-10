import { base_uri } from "../../app/config"

export const getExcelData = async () => {
    try {
        const url = await fetch(base_uri);
        const data = await url.json();
        return data;
    } catch (error) {
        return error;
    }
}