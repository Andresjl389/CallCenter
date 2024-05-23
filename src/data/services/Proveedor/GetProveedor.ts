import axios from "axios";
import { Efetch } from "../../../domain/interfaces";

const GetProveedor = async() => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.get(`${Efetch.BACK_URL}/proveedor/obtener`, {
            headers,
          });
        console.log(response.data.proveedores);
        return response.data.proveedores;
    } catch (error) {
        console.log("Error desde el service: ", error);
    }
}

export default GetProveedor;