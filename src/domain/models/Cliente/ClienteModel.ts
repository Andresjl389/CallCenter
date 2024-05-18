import { DeleteCliente, GetClientes, PostCliente, PutCliente } from "../../../data/services";


const useClienteModel = () => {

    const obtenerClientes = async () => {
        try{
            const data = await GetClientes()
            console.log('Datos desde el model: ', data)
            return data;
        }catch(error){
            console.log('Error desde el model: ', error)
        }
    }

    const crearClientes = async (userData:{}) => {
        try{
            const data = await PostCliente(userData)
            console.log('Datos desde el model: ', data)
            return data;
        }catch(error){
            console.log('Error desde el model: ', error)
        }
    }

    const actualizarClientes = async(userData:{}, id_cliente:bigint) => {
        try{
            const data = await PutCliente(userData, id_cliente)
            console.log('Datos desde el model: ', data)
            return data;
        }catch(error){
            console.log('Error desde el model: ', error)
        }
    }

    const elimnarCliente = async(id_cliente:bigint) => {
        try{
            const data = await DeleteCliente(id_cliente)
            console.log('Datos desde el model: ', data)
            return data;
        }catch(error){
            console.log('Error desde el model: ', error)
        }
    }


    return {
        obtenerClientes,
        crearClientes,
        actualizarClientes,
        elimnarCliente,
    }
}

export default useClienteModel
