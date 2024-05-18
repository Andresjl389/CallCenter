import axios from "axios";
import { Efetch } from "../../../../domain/interfaces";

const DeleteTransaccionActivoFijo = async (id_transaccionAtivoFijo: bigint) => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.delete(
      `${Efetch.BACK_URL}/transacciones/transaccionActivoFijo/eliminar/${id_transaccionAtivoFijo}`,
      {
        headers,
      }
    );
    console.log(response);
  } catch (error) {
    console.log("Error desde el service: ", error);
  }
};

export default DeleteTransaccionActivoFijo;