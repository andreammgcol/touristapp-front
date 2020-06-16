import React from 'react';
import '../styles/spinner.css';

const Spinner = () => {
  return (
    <div className="main">
        <div className="rowPlan"> <h3 class="msj">Shaping your plan</h3> </div>
        <div className="rowPlan">
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        <div className="rowPlan"> </div>
    </div>
  );
};

export default Spinner;
