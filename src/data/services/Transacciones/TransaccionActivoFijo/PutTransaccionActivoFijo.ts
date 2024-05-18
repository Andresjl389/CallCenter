import { Efetch } from "../../../../domain/interfaces";
import axios from "axios";

const PutTransaccionActivoFijo = async (
  data: {},
  id_transaccionActivoFijo: bigint
) => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.put(
      `${Efetch.BACK_URL}/transacciones/transaccionActivoFijo/actualizar/${id_transaccionActivoFijo}`,
      data,
      { headers }
    );
    console.log(response);
  } catch (error) {
    console.log("Error desde el service: ", error);
  }
};

export default PutTransaccionActivoFijo;
