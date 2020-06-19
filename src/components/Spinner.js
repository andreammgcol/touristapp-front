import React from 'react';
import '../styles/spinner.css';

const Spinner = () => {
  return (
    <div className="main">
        {window.scrollTo(0, 0)}
        <div className="rowPlan"> <h3 class="msj">Shaping your plan</h3> </div>
        <div className="rowPlan">
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        <div className="rowPadding"></div>
    </div>
  );
};

export default Spinner;
