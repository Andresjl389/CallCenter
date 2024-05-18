import { Efetch } from "../../../../domain/interfaces";
import axios from "axios";

const PostCuentasPorCobrar = async(data:{}) => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.post(
            `${Efetch.BACK_URL}/gestionCuentas/CuentasPorCobrar/crear`,
            data,
            { headers }
        );
        console.log(response);
    } catch (error) {
        console.log('Error desde el service: ',error);
    }
}

export default PostCuentasPorCobrar;