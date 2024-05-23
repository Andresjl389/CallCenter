export interface TransaccionesType {
    id_transaccion: bigint;
    fecha?: string;
    monto?: string;
    tipo_transaccion?: string;
    id_cliente?: string;
    id_presupuesto?: string;
    id_activo_fijo?: string;
    id_informe?: string;
}