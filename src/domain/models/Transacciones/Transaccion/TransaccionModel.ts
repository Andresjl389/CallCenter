import {
  DeleteTransaccion,
  GetTransaccion,
  PostTransaccion,
  PutTransaccion,
} from "../../../../data/services";

const useTransaccionModel = () => {
  const obtenerTransacciones = async () => {
    try {
      const data = await GetTransaccion();
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  const crearTransaccion = async (userData: {}) => {
    try {
      const data = await PostTransaccion(userData);
      console.log("Datos desde el model: ", PostTransaccion(userData));
      console.log('MODEL: ',data)
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  const actualizarTransaccion = async (userData: {}, id_tansaccion: bigint) => {
    try {
      const data = await PutTransaccion(userData, id_tansaccion);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  const eliminarTransaccion = async (id_transaccion: bigint) => {
    try {
      const data = await DeleteTransaccion(id_transaccion);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  return {
    obtenerTransacciones,
    crearTransaccion,
    actualizarTransaccion,
    eliminarTransaccion,
  };
};

export default useTransaccionModel;
