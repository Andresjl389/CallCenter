import axios from "axios";
import { Efetch } from "../../../../domain/interfaces";

const DeleteCuentasPorCobrar = async (id_cuenta: bigint) => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.delete(
      `${Efetch.BACK_URL}/gestionCuentas/CuentasPorCobrar/eliminar/${id_cuenta}`,
      {
        headers,
      }
    );
    console.log(response);
  } catch (error) {
    console.log('Error desde el service. ',error);
  }
};


export default DeleteCuentasPorCobrar