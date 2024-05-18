import { Efetch } from "../../../../domain/interfaces";
import axios from "axios";

const PutCuentasPorPagar = async (data: {}, id_cuenta: bigint) => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.put(
      `${Efetch.BACK_URL}/gestionCuentas/CuentasPorPagar/actualizar/${id_cuenta}`,
      data,
      { headers }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error desde el service: ", error);
  }
};


export default PutCuentasPorPagar;