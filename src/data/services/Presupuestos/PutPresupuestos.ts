import axios from "axios";
import { Efetch } from "../../../domain/interfaces";

const PutPresupuestos = async (data: {}, id_presupuestos: bigint) => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.put(
      `${Efetch.BACK_URL}/presupuesto/actualizar/${id_presupuestos}`,
      data,
      { headers }
    );
    console.log(response);
  } catch (error) {
    console.log('Error desde el service: ',error);
  }
};

export default PutPresupuestos