import {
  DeleteTransaccionActivoFijo,
  GetTransaccionActivoFijo,
  PostTransaccionActivoFijo,
  PutTransaccionActivoFijo,
} from "../../../../data/services";

const useTransaccionActivoFijoModel = () => {
  const obtenerTransaccionActivoFijo = async () => {
    try{
        const data = await GetTransaccionActivoFijo();
        console.log("Datos desde el model: ", data);
        return data;
    }catch(error){
        console.log("Error desde el model: ", error);
    }
  };

  const crearTransaccionActivoFijo = async (userData: {}) => {
    try{
        const data = await PostTransaccionActivoFijo(userData);
        console.log("Datos desde el model: ", data);
        return data;
    }catch(error){
        console.log("Error desde el model: ", error);
    }
  };

  const actualizarTransaccionActivoFijo = async (
    userData: {},
    id_transaccionActivoFijo: bigint
  ) => {
    try{
        const data = await PutTransaccionActivoFijo(userData,id_transaccionActivoFijo);
        console.log("Datos desde el model: ", data);
        return data;
    }catch(error){
        console.log("Error desde el model: ", error);
    }
  };

  const eliminarTransaccionActivoFijo = async (
    id_transaccionActivoFijo: bigint
  ) => {
    try{
        const data = await DeleteTransaccionActivoFijo(id_transaccionActivoFijo);
        console.log("Datos desde el model: ", data);
        return data;
    }catch(error){
        console.log("Error desde el model: ", error);
    }
  };

  return {
    obtenerTransaccionActivoFijo,
    crearTransaccionActivoFijo,
    actualizarTransaccionActivoFijo,
    eliminarTransaccionActivoFijo,
  };
};


export default useTransaccionActivoFijoModel;