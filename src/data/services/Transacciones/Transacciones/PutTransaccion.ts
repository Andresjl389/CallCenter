import { Efetch } from "../../../../domain/interfaces";
import axios from "axios";

const PutTransaccion = async(data:{}, id_transaccion: bigint) => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.put(
            `${Efetch.BACK_URL}/transacciones/actualizar/${id_transaccion}`,
            data,
            { headers }
        );
        console.log(response);
    } catch (error) {
        console.log('Error desde el service: ',error);
    }
}

export default PutTransaccion;