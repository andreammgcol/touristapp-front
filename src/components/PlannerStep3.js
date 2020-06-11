import React from 'react'
import { CommonPlannerFooter } from './CommonPlannerFooter';
import CommonPlannerTop from './CommonPlannerTop';
import '../styles/map_plan.css';

/*
function PlannerStep3(props) {

    // Paso 3. Muestra el plan del dia ordenado por hora y lugar de los eventos.
    // var eventsFilteredByPlan = props.eventsByPlan[1].events; // todo> filter events by selected plans (plans).
    // console.log(eventsFilteredByPlan);

    
    return (
        <div>
            {window.scrollTo(0, 0)}
            <CommonPlannerTop step={3} />
            <div className="p-grid p-fluid dashboard">
                <div className="p-col-12 p-lg-4">
                    PlannerStep3
                </div>

                <div className="p-col-12">
                    <input type="button" value="Guardar Plan!" />
                </div>

                <CommonPlannerFooter />

            </div>
        </div>
    );
}
*/

function PlannerStep3(props) {

    return (
        <div>

            <div class="wrapper">
                <section>
                    <div class='row'>
                    <div class='column'>
                        <div class='border-yes'>
                        Some Text in Column One
                        </div>
                    </div>
                    <div class='column'>
                        <div class='border-no'>
                        
                        </div>
                    </div>
                    </div>
                    
                    <div class='row'>
                    <div class='column'>
                        <div class='border-no'>
                        </div>
                    </div>
                    <div class='column'>
                        <div class='border-yes'>
                        Some Text in Column Two
                        </div>
                    </div>
                    </div>
                    
                    <div class='row'>
                    <div class='column'>
                        <div class='border-yes'>
                        Some Text in Column One
                        </div>
                    </div>
                    <div class='column'>
                        <div class='border-no'>
                        </div>
                    </div>
                    </div>
                    
                    <div class='row'>
                    <div class='column'>
                        <div class='border-no'>
                        </div>
                    </div>
                    <div class='column'>
                        <div class='border-yes'>
                        Some Text in Column Two
                        </div>
                    </div>
                    </div>
                    
                    <div class='row'>
                        <div class='column'>
                            <div class='border-yes'>
                            Some Text in Column One
                            </div>
                        </div>
                        <div class='column'>
                            <div class='border-no'>
                            </div>
                        </div>
                    </div>
                    
                    <div class='row'>
                        <div class='column'>
                            <div class='border-no'>
                            </div>
                        </div>
                        <div class='column'>
                            <div class='border-yes'>
                            Some Text in Column Two
                            </div>
                        </div>
                    </div>
                
                </section>
            </div>
            
        </div>
    );
}

export default PlannerStep3;









