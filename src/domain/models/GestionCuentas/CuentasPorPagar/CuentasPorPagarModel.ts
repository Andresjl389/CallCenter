import {
  GetCuentasPorPagar,
  PostCuentasPorPagar,
  PutCuentasPorPagar,
  DeleteCuentasPorPagar,
} from "../../../../data/services";

const useCuentasPorPagarModel = () => {
  const obtenerCuentasPorPagar = async () => {
    try {
      const data = await GetCuentasPorPagar();
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  const crearCuentasPorPagar = async (userData:{}) => {
    try {
      const data = await PostCuentasPorPagar(userData);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  const actualizarCuentasPorPagar = async (userData:{}, id_cuentas:bigint) => {
    try {
      const data = await PutCuentasPorPagar(userData, id_cuentas);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  const eliminarCuentasPorPagar = async (id_cuentas:bigint) => {
    try {
      const data = await DeleteCuentasPorPagar(id_cuentas);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };


  return{
    obtenerCuentasPorPagar,
    crearCuentasPorPagar,
    actualizarCuentasPorPagar,
    eliminarCuentasPorPagar,
  }

};


export default useCuentasPorPagarModel;