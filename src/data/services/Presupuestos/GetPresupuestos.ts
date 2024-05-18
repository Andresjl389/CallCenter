import axios from "axios";
import { Efetch } from "../../../domain/interfaces";

const GetPresupuestos = async() => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.get(`${Efetch.BACK_URL}/presupuesto/obtener`, {
            headers,
          });
        console.log(response.data.presupuestos);
        return response.data.presupuestos;
    } catch (error) {
        console.log("Error desde el service: ", error);
    }
}

export default GetPresupuestos;