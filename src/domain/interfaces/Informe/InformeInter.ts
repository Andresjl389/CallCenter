export interface InformeType {
    id_informe?: bigint;
    nombre_informe?:string;
    fecha?: Date;
    tipo_informe?: string;
    detalle_informe?: string;
    nombre_responsable?: string;
    id_transaccion_financiera?: bigint;
}