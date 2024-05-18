import axios from "axios";
import { Efetch } from "../../../../domain/interfaces";

const GetCuentasPorCobrar = async () => {
    try {
        const headers = { "content-type": "application/json" };
        const response = await axios.get(`${Efetch.BACK_URL}/gestionCuentas/CuentasPorCobrar/obtener`, {
            headers,
          });
        console.log(response.data.cuentasPorCobrar);
        return response.data.cuentasPorCobrar;
    } catch (error) {
        console.log("Error desde el service: ", error);
    }
}


export default GetCuentasPorCobrar;