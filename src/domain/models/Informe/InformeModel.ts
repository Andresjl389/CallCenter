import {
  GetInforme,
  PostInforme,
  PutInforme,
} from "../../../data/services/Informe";

const useInformeModel = () => {

    const obtenerInformes = async () => {
        const data = await GetInforme();
        console.log("Datos desde el model: ", data);
        return data;
    };

    const crearInforme = async (informe:{}) => {
        const data = await PostInforme(informe);
        console.log("Datos desde el model: ", data);
        return data;
    };

    const actualizarInforme = async (id_informe:bigint ,informe:{}) => {
        const data = await PutInforme(id_informe ,informe);
        console.log("Datos desde el model: ", data);
        return data;
    };

    return {
        obtenerInformes,
        crearInforme,
        actualizarInforme,
    };

};

export default useInformeModel;
