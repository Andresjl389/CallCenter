import axios from "axios";
import { Efetch } from "../../../../domain/interfaces";

const GetCuentasPorPagar = async () => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.get(
      `${Efetch.BACK_URL}/gestionCuentas/CuentasPorPagar/obtener`,
      {
        headers,
      }
    );
    console.log(response.data.cuentasPorPagar);
    return response.data.cuentasPorPagar;
  } catch (error) {
    console.log("Error desde el service: ", error);
  }
};


export default GetCuentasPorPagar;