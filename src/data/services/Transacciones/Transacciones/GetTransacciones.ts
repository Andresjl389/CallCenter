import axios from "axios";
import { Efetch } from "../../../../domain/interfaces"; 

const GetTransaccion = async () => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.get(`${Efetch.BACK_URL}/transacciones/obtener`, {
      headers,
    });
    console.log(response.data.transacciones);
    return response.data.transacciones;
  } catch (error) {
    console.log("Error desde el service: ", error);
  }
};

export default GetTransaccion;
