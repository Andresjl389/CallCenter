import { Efetch } from "../../../domain/interfaces";
import axios from "axios";


const GetClientes = async() => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.get(`${Efetch.BACK_URL}/cliente/obtener`, {
            headers,
          });
        console.log(response.data.cliente);
        return response.data.cliente;
    } catch (error) {
        console.log("Error desde el service: ", error);
    }
}


export default GetClientes;