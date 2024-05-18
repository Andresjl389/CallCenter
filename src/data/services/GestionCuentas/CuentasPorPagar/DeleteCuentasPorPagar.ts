import axios from "axios";
import { Efetch } from "../../../../domain/interfaces";

const DeleteCuentasPorPagar = async (id_cuenta: bigint) => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.delete(
      `${Efetch.BACK_URL}/gestionCuentas/CuentasPorPagar/eliminar/${id_cuenta}`,
      {
        headers,
      }
    );
    console.log(response);
  } catch (error) {
    console.log('Error desde el service: ',error);
  }
};

export default DeleteCuentasPorPagar;