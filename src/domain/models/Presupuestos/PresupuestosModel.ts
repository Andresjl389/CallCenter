import {
  GetPresupuestos,
  PostPresupuestos,
  PutPresupuestos,
  DeletePresupuestos,
} from "../../../data/services";

const usePresupuestosModel = () => {
  const obtenerPresupuestos = async () => {
    try {
      const data = await GetPresupuestos();
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  const crearPresupuesto = async (userData:{}) => {
    try {
      const data = await PostPresupuestos(userData);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  const actualizarPresupuesto = async (userData:{}, id_presupuesto:bigint) => {
    try {
      const data = await PutPresupuestos(userData, id_presupuesto);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };

  const eliminarPresupuesto = async (id_presupuesto:bigint) => {
    try {
      const data = await DeletePresupuestos(id_presupuesto);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };


  return{
    obtenerPresupuestos,
    crearPresupuesto,
    actualizarPresupuesto,
    eliminarPresupuesto,
  }

};


export default usePresupuestosModel;