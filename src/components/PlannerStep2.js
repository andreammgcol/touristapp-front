import React from 'react'
import { CommonPlannerFooter } from './CommonPlannerFooter';
import CommonPlannerTop from './CommonPlannerTop';
import '../styles/activities.css';

// new html layout
function PlannerStep2(props) {

    var eventsFiltered = props.activities;
    const isFirstLoad = props.isFirstLoadStep2;

    return (
        <div>
            {isFirstLoad && window.scrollTo(0, 0)}
            <div class="wrapper">
                <section>

                    {/* <div class="row">
						<i class="fa fa-fw fa-arrow-circle-left"></i><input type="button" value="go back" onClick={props.goBack} />
					</div> */}

                    <div class="row">
                        <div class="NumFound">
                            <div class="goBack">
                                <i class="fa fa-fw fa-arrow-circle-left"></i><input type="button" value="go back" onClick={props.goBack}/>
                            </div>
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
                        <div class="btn-plan">
                            <input type="button" value="Shape plan!" onClick={props.handleStep3} />
                        </div>
                    </div>
                </section>
            </div>
            
        </div>
    );
}



export default PlannerStep2;
