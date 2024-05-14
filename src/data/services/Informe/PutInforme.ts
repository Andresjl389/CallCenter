import axios from "axios";
import { Efetch } from "../../../domain/interfaces";

const PutInforme = async (id_informe: bigint, data: {}) => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.put(
      `${Efetch.BACK_URL}/informe/actualizar/${id_informe}`,
      data,
      { headers }
    );
    console.log(response.data.informe);
    return response.data.informe;
  } catch (error) {
    console.log("Error desde el service: ", error);
  }
};

export default PutInforme;
