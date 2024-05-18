import { Efetch } from "../../../domain/interfaces";
import axios from "axios";

const DeleteCliente = async(id_cliente: bigint) => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.delete(`${Efetch.BACK_URL}/cliente/eliminar/${id_cliente}`, {
            headers,
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log("Error desde el service: ", error);
    }
}

export default DeleteCliente;