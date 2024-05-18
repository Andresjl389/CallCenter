import { Efetch } from "../../../../domain/interfaces";
import axios from "axios";

const DeleteTransaccion = async(id_transaccion: bigint) => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.delete(`${Efetch.BACK_URL}/transacciones/eliminar/${id_transaccion}`, {
            headers,
        });
        console.log(response);
    } catch (error) {
        console.log("Error desde el service: ", error);
    }
}

export default DeleteTransaccion;