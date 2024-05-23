import React, { useState } from "react";
import {
  HeaderComponent,
  FormInputComponent,
  CardComponent,
  SelectInputComponent,
} from "../../components";
import { Button } from "@mui/material";
import { usePresupuestosModel, useProveedorModel } from "../../../domain/models";
import { useServices } from "../../../hooks";

const CrearProveedor = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [espera, setEspera] = useState<boolean>(false);
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoProveedo, setTipoProveedor] = useState("");
  const [condicionesPago, setCondicionesPago] = useState("");
  const [idCuenta, setIdCuenta] = useState("");

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

  const { crearProvedor } = useProveedorModel();
  const { loading, cuentasPagarData: cuenta } = useServices({
    loadCuentasPorPagar: true,
  });

  const handleSubmit = async () => {
    setEspera(true);
    const proveedor = {
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        tipo_proveedor: tipoProveedo,
        condiciones_pago: condicionesPago,
        id_cuenta_pp: idCuenta,
    };
    await crearProvedor(proveedor);
    alert("Cuenta por cobrar creada exitosamente");
    window.location.reload();
    setEspera(false);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      <HeaderComponent
        toggleSidebar={toggleSidebar}
        sidebarCollapsed={sidebarCollapsed}
      />
      <div
        style={{
          display: "flex",
          marginLeft: handleStyle(),
          flexDirection: "column",
        }}
      >
        <CardComponent title="Registro cuentas por pagar">
          <FormInputComponent
            label="Nombre"
            name="nombre"
            type="text"
            onChange={(event) => setNombre(event.target.value)}
            value={nombre}
          />
          <FormInputComponent
            label="Direccion"
            name="direccion"
            type="text"
            onChange={(event) => setDireccion(event.target.value)}
            value={direccion}
          />
          <FormInputComponent
            label="Telefono"
            name="telefono"
            type="number"
            onChange={(event) => setTelefono(event.target.value)}
            value={telefono}
          />
          <FormInputComponent
            label="Tipo proveedor"
            name="tipo_proveedor"
            type="number"
            onChange={(event) => setTipoProveedor(event.target.value)}
            value={tipoProveedo}
          />
          <FormInputComponent
            label="Condiciones de pago"
            name="condiciones_pago"
            type="text"
            onChange={(event) => setCondicionesPago(event.target.value)}
            value={condicionesPago}
          />

          <SelectInputComponent
            label="Cuenta por pagar"
            value={idCuenta}
            onChange={(event) => {
              setIdCuenta(event.target.value);
            }}
          >
            {cuenta?.map((item) => (
              <option
                key={item.id_transaccion?.toString()}
                value={item.id_transaccion?.toString()}
              >
                {item.id_cuenta_pp?.toString()} {item.monto_pendiente?.toString()}
              </option>
            ))}
          </SelectInputComponent>
          <Button
            variant="contained"
            style={{ gridColumn: "1/-1", width: "50%", margin: "auto" }}
            onClick={handleSubmit}
            disabled={espera || loading}
          >
            Enviar
          </Button>
        </CardComponent>
      </div>
    </>
  );
};

export default CrearProveedor;
