import axios from "axios";
import { Efetch } from "../../../domain/interfaces";

const DeleteInforme = async(id_informe: bigint) => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.delete(`${Efetch.BACK_URL}/informe/eliminar/${id_informe}`, {
            headers,
          });
        console.log(response.data.informe);
        return response.data.informe;
    } catch (error) {
        console.log("Error desde el service: ", error);
    }
}

export default DeleteInforme;