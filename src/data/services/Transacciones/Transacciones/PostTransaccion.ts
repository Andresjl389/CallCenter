import axios from "axios";
import { Efetch } from "../../../../domain/interfaces";

const PostTransaccion = async(data:{}) => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.post(
            `${Efetch.BACK_URL}/transacciones/crear`,
            data,
            { headers }
        );
        console.log(response);
        return response.data;
    } catch (error) {
        console.log('Error desde el services: ',error);
    }
}

export default PostTransaccion