import axios from "axios";
import { Efetch } from "../../../../domain/interfaces";

const PostCuentasPorPagar = async(data: {}) => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.post(
            `${Efetch.BACK_URL}/gestionCuentas/CuentasPorPagar/crear`,
            data,
            { headers }
        );
        console.log(response);
    } catch (error) {
        console.log("Error desde el service: ", error);
    }
}


export default PostCuentasPorPagar;