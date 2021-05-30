import React, { useContext } from "react";
import AlertContext from "../../Context/Alert/alertContext";
export const Alert = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alert !== null && (
      <div className={`alert alert-${alertContext.alert.type}`}>
        <i className="fas fa-info-circle"></i> {alertContext.alert.msg}
      </div>
    )
  );
};
export default Alert;
