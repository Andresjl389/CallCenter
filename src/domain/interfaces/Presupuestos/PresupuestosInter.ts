export interface PresupuestosType{
    id_presupuesto: bigint;
    año_fiscal?: Date;
    cantidad_asignada?: bigint;
    cantidad_gastada?: bigint;
}