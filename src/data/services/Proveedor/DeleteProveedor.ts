import axios from "axios";
import { Efetch } from "../../../domain/interfaces";

const DeleteProveedor = async (id_proveedor: bigint) => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.delete(
      `${Efetch.BACK_URL}/proveedor/eliminar/${id_proveedor}`,
      {
        headers,
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error desde el service: ", error);
  }
};


export default DeleteProveedor;