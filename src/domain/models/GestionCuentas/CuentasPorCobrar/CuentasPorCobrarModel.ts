import {
  GetCuentasPorCobrar,
  PostCuentasPorCobrar,
  PutCuentasPorCobrar,
  DeleteCuentasPorCobrar,
} from "../../../../data/services";

const useCuentasPorCobrarModel = () => {
  const obtenerCuentasPorCobrar = async () => {
    try {
      const data = await GetCuentasPorCobrar();
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  const crearCuentasPorCobrar = async (userData: {}) => {
    try {
      const data = await PostCuentasPorCobrar(userData);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  const actualizarCuentasPorCobrar = async (
    userData: {},
    id_cuentas: bigint
  ) => {
    try {
      const data = await PutCuentasPorCobrar(userData, id_cuentas);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  const eliminarCuentasPorCobrar = async (id_cuentas: bigint) => {
    try {
      const data = await DeleteCuentasPorCobrar(id_cuentas);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  return {
    obtenerCuentasPorCobrar,
    crearCuentasPorCobrar,
    actualizarCuentasPorCobrar,
    eliminarCuentasPorCobrar,
  };
};

export default useCuentasPorCobrarModel;
