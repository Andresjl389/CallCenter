export interface CuentasPorPagarType{
    id_cuenta_pp?: bigint;
    numero_factura?: bigint;
    monto_pendiente?: bigint;
    fecha_vencimiento?: Date;
    proveedor_debe?: string;
    estado?: boolean;
    id_transaccion?: bigint;
}