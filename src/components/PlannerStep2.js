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

/*  */
function PlannerStep0(props) {
    // Paso 2. Seleccionar ACTIVIDADES/ eventos de los categorias escogidas.
    // Listado de actividades segun categorias seleccionados: this.state.plans.
    // var eventsFilteredByPlan = props.activities[1].items; // todo> filter events (activities) by selected categories (props.plans).
    // console.log(eventsFilteredByPlan);

    var eventsFiltered = props.activities; 

    return (
        <div>
            <CommonPlannerTop step={2} />
            <div className="p-grid p-fluid dashboard">
                {eventsFiltered.map((activity) =>

                    activity.items.map((event) =>
                        <div className="p-col-12 p-md-6 p-xl-3" key={event.id}>
                            <div className="highlight-box">
                                <div className="initials" style={{ backgroundImage: `url("${event.picture}")`, backgroundPosition: 'center center', backgroundColor: '#007be5', color: '#fff' }}>
                                    <span>                                   
                                        <i className="pi pi-search" /> ver detalle
                                    </span>
                                </div>
                                <div className="highlight-details ">
                                    <i className={`pi ${event.icon} `} />
                                    
                                    <span style={{fontWeight:'bold'}} >{event.title}</span>
                                    <span>&nbsp;&nbsp;</span>
                                    <input type="checkbox" onChange={props.onChange} value={event.id}  />
                                    <span className="count">{event.cost}</span>
                                </div>
                            </div>
                        </div>

                    )

                )}


                <div className="p-col-12">
                    <input type="button" value="Armar plan!" onClick={props.handleStep3} />
                </div>
                <CommonPlannerFooter />
            </div>
        </div>
    );
}



// new html layout
/*  */
function PlannerStep2(props) {

    var eventsFiltered = props.activities;
    const isFirstLoad = props.isFirstLoadStep2;

    return (
        <div>
            {isFirstLoad && window.scrollTo(0, 0)}
            <div class="wrapper">
                <section>

                    <div class="row">
						<input type="button" value="go back" onClick={props.goBack} />
					</div>

                    <div class="row">
                        <div class="NumFound">
                            <h1 class="num">18</h1>
                            <h3 class="msj">¡Activities found!</h3>
                        </div>
                    </div>

                    {eventsFiltered.map((activity) =>
                        activity.items.map((event) =>

                            <div class="row" key={event.id}>
                                <div class="activities">
                                    <div class="box">
                                        <div class="imgActivity">
                                            <img src={event.picture} alt="touristapp event" />
                                        </div>
                                        <div class="description">
                                            <h2>{event.title}</h2>
                                            <p>{event.text} {event.cost}</p>
                                            <label class="switch">
                                                <input type="checkbox" onChange={props.onChange} value={event.id} checked={props.selectedActivities.includes(event.id)}  />
                                                <span class="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    )}
                    
                    <div class="row">
                        <input type="button" value="Armar plan!" onClick={props.handleStep3} />
                    </div>
                </section>
            </div>
            
        </div>
    );
}



export default PlannerStep2;
