export interface TransaccionActivoFijo {
    id_activo_fijo?: bigint;
    nombre?: string;
    valor_original?: bigint;
    fecha_adquirido?: Date;
    vida_util?: bigint;
    metodo_depreciacion?: string;
    estado_actual?: boolean;
    id_transaccion?: bigint;
}