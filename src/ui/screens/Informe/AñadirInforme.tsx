import { useState } from "react";
import { FormInputComponent, HeaderComponent, SeccionComponent } from "../../components";
import { CardComponent } from "../../components/Cards";

const AñadirInformeScreen = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };
  return (
    <>
      <HeaderComponent
        sidebarCollapsed={sidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />
      <div
        style={{
          display: "flex",
          marginLeft: handleStyle(),
          flexDirection: "row",
        }}
      >
        <div>
          <SeccionComponent name="informe" />
        </div>
        <div style={{display:'flex', justifyContent:'center', width:'80%'}}>
          <CardComponent title="Añadir informe">
          <FormInputComponent
            label="ID activo fijo"
            name="id_transaccion"
            type="number"
          />
          </CardComponent>
        </div>
      </div>
    </>
  );
};

export default AñadirInformeScreen;
