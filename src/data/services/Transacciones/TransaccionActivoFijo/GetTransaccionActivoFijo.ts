import axios from "axios";
import { Efetch } from "../../../../domain/interfaces";

const GetTransaccionActivoFijo = async () => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.get(
      `${Efetch.BACK_URL}/transacciones/transaccionActivoFijo/obtener`,
      {
        headers,
      }
    );
    console.log(response.data.transaccionActivoFijo);
    return response.data.transaccionActivoFijo;
  } catch (error) {
    console.log("Error desde el service: ", error);
  }
};

export default GetTransaccionActivoFijo;
