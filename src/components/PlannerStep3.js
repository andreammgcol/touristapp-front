import React from 'react'
import { CommonPlannerFooter } from './CommonPlannerFooter';
import CommonPlannerTop from './CommonPlannerTop';
import '../styles/map_plan.css';

function Message(plan) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // const formated_Date = '2020-06-15T15:00:00';
    const date = new Date(plan.date);
    const month = date.getMonth() + 1;
    const eventDate = (`${date.getDate()}-${months[month-1]}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
    var res = ` ${plan.title} (${eventDate}) Cost: ${plan.cost}`;
    return res;
}

function PlannerStep3(props) {

    return (
        <div>
            {window.scrollTo(0, 0)}

            <div class="wrapper">
                <section>
                    <div class="row">
                        <input type="button" value="go back" onClick={props.goBack} />
                    </div>

                    {props.shapedPlan.map((plan, index) =>

                        <div class='row' key={plan.id}>
                            <div class='column'>
                                <div class={(index % 2 === 0) ? 'border-yes' : 'border-no'} >
                                    {(index % 2 === 0) ? Message(plan) : ''}
                                </div>
                            </div>
                            <div class='column'>
                                <div class={(index % 2 === 1) ? 'border-yes' : 'border-no'} >
                                    {(index % 2 === 1) ? Message(plan) : ''}
                                </div>
                            </div>
                        </div>

                    )}

                    <div class="row">
                        <input type="button" value="Guardar plan!" onClick={props.handleStep} />
                    </div>

                </section>
            </div>

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









