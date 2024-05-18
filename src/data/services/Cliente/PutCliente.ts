import { Efetch } from "../../../domain/interfaces";
import axios from "axios";

const PutCliente = async (data: {}, id_cliente:bigint) => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.put(
            `${Efetch.BACK_URL}/cliente/actualizar/${id_cliente}`,
            data,
            { headers }
        );
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export default PutCliente;