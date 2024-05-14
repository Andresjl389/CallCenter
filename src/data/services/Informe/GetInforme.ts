import axios from "axios";
import { Efetch } from "../../../domain/interfaces";

const GetInforme = async() => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.get(`${Efetch.BACK_URL}/informe/obtener`, {
            headers,
        });
        console.log(response.data.informes);
        return response.data.informes;
    } catch (error) {
        console.log("Error desde el service: ", error);
    }
}

export default GetInforme;