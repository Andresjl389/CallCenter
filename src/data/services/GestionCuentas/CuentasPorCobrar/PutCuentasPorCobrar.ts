import { Efetch } from "../../../../domain/interfaces";
import axios from "axios";

const PutCuentasPorCobrar = async (data: {}, id_cuenta: bigint) => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.put(
      `${Efetch.BACK_URL}/gestionCuentas/CuentasPorCobrar/actualizar/${id_cuenta}`,
      data,
      { headers }
    );
    console.log(response);
  } catch (error) {
    console.log('Error desde el service: ',error);
  }
}

export default PutCuentasPorCobrar;
