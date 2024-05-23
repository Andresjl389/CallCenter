export interface CuentasPorCobrarType {
    id_cuenta_pc: bigint;
    monto_pendiente?: bigint;
    fecha_vencimiento?: Date;
    id_cliente?: bigint;
    id_transaccion?: bigint;
}