import axios from "axios";
import { Efetch } from "../../../domain/interfaces";

const PutProveedor = async(data:{}, id_proveedor: bigint) => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.put(
            `${Efetch.BACK_URL}/proveedor/actualizar/${id_proveedor}`,
            data,
            { headers }
        );
        console.log(response);
    } catch (error) {
        console.log('Error desde el service: ',error);
    }
}

export default PutProveedor;