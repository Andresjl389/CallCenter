import axios from "axios";
import { Efetch } from "../../../domain/interfaces";

const PostInforme = async(data:{}) => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.post(`${Efetch.BACK_URL}/informe/crear`, {
            headers,
        });
        console.log(response.data.informes);
        return response.data.informes;
    } catch (error) {
        console.log("Error desde el service: ", error);
    }
}


export default PostInforme