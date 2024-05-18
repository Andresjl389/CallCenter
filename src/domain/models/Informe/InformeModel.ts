import {
  GetInforme,
  PostInforme,
  PutInforme,
  DeleteInforme,
} from "../../../data/services";

const useInformeModel = () => {

    const obtenerInformes = async () => {
        try{
            const data = await GetInforme();
            console.log("Datos desde el model: ", data);
            return data;
        }catch(error){
            console.log("Error desde el model: ", error);
        }
    };

    const crearInforme = async (informe:{}) => {
        try{
            const data = await PostInforme(informe);
            console.log("Datos desde el model: ", data);
            return data;
        }catch(error){
            console.log("Error desde el model: ", error);
        }
    };

    const actualizarInforme = async (id_informe:bigint ,informe:{}) => {
        try{
            const data = await PutInforme(id_informe ,informe);
            console.log("Datos desde el model: ", data);
            return data;
        }catch(error){
            console.log("Error desde el model: ", error);
        }
    };

    const elimnarInforme = async (id_informe:bigint) => {
        try{
            const data = await DeleteInforme(id_informe);
            console.log("Datos desde el model: ", data);
            return data;
        }catch(error){
            console.log("Error desde el model: ", error);
        }
    }

    return {
        obtenerInformes,
        crearInforme,
        actualizarInforme,
        elimnarInforme,
    };

};

export default useInformeModel;
