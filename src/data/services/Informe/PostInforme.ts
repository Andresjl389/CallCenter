import axios from "axios";
import { Efetch } from "../../../domain/interfaces";

const PostInforme = async (data: {}) => {
    console.log("Datos desde el service: ", data);
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.post(
      `${Efetch.BACK_URL}/informe/crear`,
      data,
      { headers }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error desde el service: ", error);
  }
};

export default PostInforme;
