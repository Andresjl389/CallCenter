import { GetProveedor, PostProveedor, PutProveedor, DeleteProveedor } from "../../../data/services";

const useProveedorModel = () => {
  const obtenerProveedor = async () => {
    try {
      const data = await GetProveedor();
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  };


  const crearProvedor = async (userData:{}) => {
    try {
      const data = await PostProveedor(userData);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  }

  const actualizarProveedor = async (userData:{}, id_proveedor:bigint) => {
    try {
      const data = await PutProveedor(userData,id_proveedor);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  }

  const eliminarProveedor = async (id_proveedor:bigint) => {
    try {
      const data = await DeleteProveedor(id_proveedor);
      console.log("Datos desde el model: ", data);
      return data;
    } catch (error) {
      console.log("Error desde el model: ", error);
    }
  }

  return{
    obtenerProveedor,
    crearProvedor,
    actualizarProveedor,
    eliminarProveedor,
  }

};

export default useProveedorModel;
