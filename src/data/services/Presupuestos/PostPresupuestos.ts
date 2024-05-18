import { Efetch } from "../../../domain/interfaces";
import axios from "axios";

const PostPresupuestos = async (data: {}) => {
  try {
    const headers = { "content-type": "application/json" };
    const response = await axios.post(
      `${Efetch.BACK_URL}/presupuesto/crear`,
      data,
      {
        headers,
      }
    );
    console.log(response);
  } catch (error) {
    console.log("Error desde el service: ", error);
  }
};

export default PostPresupuestos;
