import { GetTransaccion } from '../../../../data/services'

const useGetTransaccionModel = () =>{
    const obtenerTransacciones = async() => {
        const data = await GetTransaccion()
        console.log('Datos desde el model: ', data)
        return data;
    }

    return {
        obtenerTransacciones
    }
}

export default useGetTransaccionModel;