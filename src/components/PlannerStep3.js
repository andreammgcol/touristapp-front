import React from 'react'
import { CommonPlannerFooter } from './CommonPlannerFooter';
import CommonPlannerTop from './CommonPlannerTop';
import '../styles/plan.css';

function DateInfo(plan) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(plan.date);
    const month = date.getMonth() + 1;
    const eventDate = (`${date.getDate()}-${months[month-1]}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
    var res = `(${eventDate})`;
    return res;
}

function PlannerStep3(props) {

    return (
   
            <div class="wrapper">
                {window.scrollTo(0, 0)}
                <section>

                    <div class="row">
                        <div class="goBack">
                            <i class="fa fa-fw fa-arrow-circle-left"></i><input type="button" value="go back" onClick={props.goBack} />
                        </div>
                    </div>

                    <div class="timeline">
                    {props.shapedPlan.map((plan, index) =>

                        <div class={(index % 2 === 0) ? "container left" : "container right"} key={plan.id}>
                            <div class="content">
                                <h2>{plan.title}</h2>
                                <p>{DateInfo(plan)} {plan.cost}</p>
                            </div>
                        </div>

                    )}
                    </div>

                    <div class="row">
                        <div class="savePlan">
                            <input type="button" value="save my plan" onClick={props.handleStep} /><i class="fa fa-save"></i>
                        </div>
                    </div>

                </section>
            </div>

        
    );
}


// new html layout
function PlannerStep0(props) {

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

                    <div class="row">
                        <input type="button" value="Guardar plan!" onClick={props.handleStep} />
                    </div>

                </section>
            </div>

        </div>
    );
}

export default PlannerStep3;









