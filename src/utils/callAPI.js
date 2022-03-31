import { HOST_ADDRESS } from "../config";

export async function callAPI(path, defaultValue) {
    const response = await fetch(`${HOST_ADDRESS}/${path}`);
    if (response.ok) return response.json();
    return defaultValue;
}