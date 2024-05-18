import { Efetch } from "../../../domain/interfaces";
import axios from "axios";

const DeletePresupuestos = async (id_presupuesto: bigint) => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.delete(
      `${Efetch.BACK_URL}/presupuesto/eliminar/${id_presupuesto}`,
      {
        headers,
      }
    );
    console.log(response);
  } catch (error) {
    console.log('Error desde el service: ',error);
  }
};


export default DeletePresupuestos