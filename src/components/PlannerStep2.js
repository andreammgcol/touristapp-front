import React from 'react'
import { CommonPlannerFooter } from './CommonPlannerFooter';
import CommonPlannerTop from './CommonPlannerTop';
import '../styles/activities.css';

/*
handleClick1 = event => {
    console.log('click -> handleClick1.');    
    event.preventDefault();
};
*/

/*
function PlannerStep2(props) {    
    // Paso 2. Seleccionar ACTIVIDADES/ eventos de los planes escogidos.
    // Listado de actividades segun planes seleccionados: this.state.plans.
    var eventsFilteredByPlan = props.eventsByPlan[1].events; // todo> filter events by selected plans (props.plans).
    // console.log(eventsFilteredByPlan);

    return (
        <div>
            <CommonPlannerTop step={2} />
            <div className="p-grid p-fluid dashboard">


                {eventsFilteredByPlan.map((event) =>

                    <div className="p-col-12 p-md-6 p-xl-3" key={event.id}>
                        <div className="highlight-box">
                            <div className="initials" style={{ backgroundImage: `url("${event.picture}")`, backgroundPosition: 'center center', backgroundColor: '#007be5', color: '#fff' }}>
                                <span>                                   
                                    <i className="pi pi-search" /> ver detalle
                                </span>
                            </div>
                            <div className="highlight-details ">
                                <i className={`pi ${event.icon} `} />
                                
                                <span style={{fontWeight:'bold'}} >{event.label}</span>
                                <span>&nbsp;&nbsp;</span>
                                <input type="checkbox" onChange={props.onChange} value={event.id}  />
                                <span className="count">{event.cost}</span>
                            </div>
                        </div>
                    </div>

                )}


                <div className="p-col-12">
                    <input type="button" value="Armar plan!" onClick={props.handleStep3} />
                </div>
                <CommonPlannerFooter />
            </div>
        </div>
    );
}
*/

function PlannerStep2(props) {

    return (
        <div>

            <div class="wrapper">
                <section>
                    <div class="row">
                        <div class="NumFound">
                            <h1 class="num">18</h1>
                            <h3 class="msj">¡Activities found!</h3>
                        </div>
                        <div class="activities">
                            <div class="box">
                                <div class="imgActivity">
                                    <img src="images/activities/Parque Arví_1.jpg" alt="arvi" />
                                </div>
                                <div class="description">
                                    <h2>Parque Arví</h2>
                                    <p>Turismo de naturaleza en Medellín. El Parque Arví es un parque público abierto, creado para el disfrute de toda la comunidad local, nacionales y extranjeros, que mediante una oferta turística sostenible, propende por la conservación de las riquezas ambientales, culturales y arqueológicas.</p>
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="activities">
                            <div class="box">
                                <div class="imgActivity">
                                    <img src="images/activities/Botero-Park.jpg" alt="botero"  />
                                </div>
                                <div class="description">
                                    <h2>Plaza Botero</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisl vitae urna scelerisque efficitur. Ut a sem sed erat tristique dignissim. Morbi egestas, lorem imperdiet maximus porta, urna dui porttitor leo, vitae tincidunt augue ex eu dui. Aliquam nec viverra libero, ut consectetur mauris.</p>
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="activities">
                            <div class="box">
                                <div class="imgActivity">
                                    <img src="images/activities/Jazz.jpg" alt="jazz"  />
                                </div>
                                <div class="description">
                                    <h2>Festival de Jazz</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisl vitae urna scelerisque efficitur. Ut a sem sed erat tristique dignissim. Morbi egestas, lorem imperdiet maximus porta, urna dui porttitor leo, vitae tincidunt augue ex eu dui. Aliquam nec viverra libero, ut consectetur mauris.</p>
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <input type="button" value="Armar plan!" onClick={props.handleStep3} />
                    </div>
                </section>
            </div>
            
        </div>
    );
}



export default PlannerStep2;






/*
//console.log(eventsByPlan);
var eventsFilteredByPlan = eventsByPlan[1].events; // todo> filter events by selected plans (plans).
console.log(eventsFilteredByPlan);
return (
    <div>
        <CommonPlannerTop step={2} />
        <div className="p-grid p-fluid dashboard">

            <div className="p-col-12 p-lg-4">
                <div className="card summary">

                    <ul className='task-list'>
                        {eventsFilteredByPlan.map((event) =>
                            <li key={event.id}>
                                <span className="task-name">{event.label}</span>
                                <span className="task-name">{event.text}</span>
                                <span className="task-name">{event.place}</span>
                                <i className={`pi ${event.icon} `} />
                            </li>
                        )}
                    </ul>

                </div>
            </div>
            <div className="p-col-12">
                <Button type="button" label="Armar plan!" icon="fa-send" onClick={this.handleStep3} />
            </div>
            <CommonPlannerFooter />
        </div>
    </div>
);

*/





