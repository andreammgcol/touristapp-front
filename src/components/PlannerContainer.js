import React, { Component } from 'react';
import { Redirect } from 'react-router'
import PlannerStep1 from './PlannerStep1';
import PlannerStep2 from './PlannerStep2';
import PlannerStep3 from './PlannerStep3';
import dbFake from '../database/db.json';
import { myDate, sortFunction } from '../utils';
import Spinner from './Spinner';

export class PlannerContainer extends Component {

    constructor() {
        super();
        this.state = {
            currentStep: 1,
            isLoadedCategory: false,
            isLoadedActivity: false,
            isFirstLoadStep2: true,
            loadingStep3: true,
            redirectLogin: false,
            selectedCategories: [], // categorias seleccionadas
            selectedActivities: [], // actividades seleccionadas
            savedPlans: [], // planes guardados por usuario
        };

        // this.onTaskChange = this.onTaskChange.bind(this);
    }

    componentDidUpdate() {
        console.log('PlannerContainer - componentDidUpdate', myDate());
        const { currentStep, isLoadedActivity } = this.state;
        console.log('currentStep', currentStep);

        if (currentStep === 3) {
            const { loadingStep3 } = this.state;
            if (loadingStep3) {
                setTimeout(() => { this.setState({ loadingStep3: false }) }, 3000); // simulate loading
            }
        }

        /* 
        if (currentStep === 2 && !isLoadedActivity) {
            // activities fetch
            console.log('fetching activities');

            fetch("https://lab-tourist-api.herokuapp.com/api/v1/activities")
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('api/v1/activities');
                        console.log(result);

                        this.setState({
                            isLoadedActivity: true,
                            activityItemsResponse: result.response
                        });

                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
        */

    }

    componentDidMount() {
        console.log('PlannerContainer - componentDidMount', myDate());
        // console.log('dbFake');
        // console.log(dbFake);

        // Pend: hacer un fetch a una lib generica y leer de un .json con los datos en el archivo local. 
        // luego connectar con un endpoint real.
        /*
        fetch("/my-comments.json")
          .then(res => res.json())
          .then(comments => this.setState({ comments }))
          */



        // NOTE:
        // Revisar el enfoque de tener o class components (componentDidMount) para los plannerSteps
        // o explorar el uso de Hooks (useEffect) parar los fetchs del api.
        /* 
        const { currentStep, isLoadedCategory } = this.state;
        console.log('currentStep', currentStep);
        if (currentStep === 1 && !isLoadedCategory) {
            // categories fetch
            console.log('fetching categories');
            fetch("https://lab-tourist-api.herokuapp.com/api/v1/categories")
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('api/v1/categories');
                        console.log(result);

                        this.setState({
                            isLoadedCategory: true,
                            categoryItemsResponse: result.response
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
        */


    }

    onPlanChange = (e) => {
        console.log('onPlanChange-Planner.');
        // Categorias seleccionadas
        let selectedItems = [...this.state.selectedCategories];
        console.log(e.target.value);
        console.log(e.target.checked);
        if (e.target.checked)
            selectedItems.push(e.target.value);
        else
            selectedItems.splice(selectedItems.indexOf(e.target.value), 1);

        console.log(selectedItems);
        this.setState({ selectedCategories: selectedItems });
    }

    onEventChange = (e) => {
        console.log('onEventChange-Planner.');
        // Actividades seleccionadas
        let selectedItems = [...this.state.selectedActivities];
        if (e.target.checked)
            selectedItems.push(e.target.value);
        else
            selectedItems.splice(selectedItems.indexOf(e.target.value), 1);

        console.log(selectedItems);
        this.setState({ selectedActivities: selectedItems, isFirstLoadStep2: false });
    }


    handleStep2 = event => {
        console.log('click -> handleStep2.');
        this.setState({
            currentStep: 2,
            loadingStep3: true
        });
        event.preventDefault();
    };

    handleStep3 = event => {
        console.log('click -> handleStep3.');
        this.setState({
            currentStep: 3
        });
        event.preventDefault();
    };

    handleStepLast = event => {
        console.log('click -> handleStepLAST.');
        this.setState({
            redirectLogin: true
        });
        event.preventDefault();
    };

    handleSelectAllCategories = event => {
        console.log('click -> handleSelectAllCategories.');

        const allcats = dbFake.categories.map((cat) => {
            return cat.id;
        });
        console.log('allcats');
        console.log(allcats);

        this.setState({
            selectedCategories: allcats
        });

        event.preventDefault();
    };

    goBack1 = event => {
        console.log('click -> goBack1.');
        this.setState({
            currentStep: 1
        });
        event.preventDefault();
    };

    goBack2 = event => {
        console.log('click -> goBack2.');
        this.setState({
            currentStep: 2, 
            loadingStep3: true
        });
        event.preventDefault();
    };

    render() {
        console.log('PlannerContainer - render', myDate());
        if (this.state.redirectLogin) {
            return <Redirect to='/login' />
        }
        const { currentStep, selectedCategories, selectedActivities } = this.state;

        // Paso 1. Seleccionar tipos de planes (Categorias).
        if (currentStep === 1) {
            return <PlannerStep1 categories={dbFake.categories} selectedCategories={selectedCategories} onChange={this.onPlanChange} handleStep2={this.handleStep2} handleAll={this.handleSelectAllCategories} />;
        }

        // Paso 2. Seleccionar Actividades (eventos), segun las categorias escogidas. 
        if (currentStep === 2) {
            console.log('PASO 2 -- ');
            console.log('dbFake.activities');
            console.log(dbFake.activities);
            // console.log(selectedCategories);
            // var listActivitiesByCategories = dbFake.activities.filter(act => act.cat_id === "cat2-musica");
            var listActivitiesByCategories = dbFake.activities.filter(function (element) {
                var cat = element.cat_id;
                return selectedCategories.indexOf(cat) > -1;
            });

            console.log('listActivitiesByCategories');
            console.log(listActivitiesByCategories);
            var total = 0;
            var length = listActivitiesByCategories.length;
            for (var i = 0; i < length; i++) {
                var aItems = listActivitiesByCategories[i].items;
                total += aItems.length;
            }
            console.log(total);
            

            return <PlannerStep2 total={total} isFirstLoadStep2={this.state.isFirstLoadStep2} activities={listActivitiesByCategories} selectedActivities={selectedActivities} onChange={this.onEventChange} handleStep3={this.handleStep3} goBack={this.goBack1} />;
        }

        // Paso 3. Mostrar el plan armado y ordenado al usuario, con opcion de guardar.
        if (currentStep === 3) {
            // busca las actividades seleccionadas en la db
            // let orderedActivitiesList = dbFake.activities[0].items;
            var finalItems = [];
            dbFake.activities.forEach((act) => {
                act.items.forEach(element => {
                    if (selectedActivities.indexOf(element.id) > -1) {
                        finalItems.push(element);
                    }
                });
            });
            console.log('finalItems');
            console.log(finalItems);
            // ordena las actividades por hora y lugar del evento.
            finalItems.sort(sortFunction);

            const { loadingStep3 } = this.state;
            if (loadingStep3) {
                return <Spinner />;
            } else {
                return <PlannerStep3 shapedPlan={finalItems} handleStep={this.handleStepLast} goBack={this.goBack2} />;
            }

        }

        return (<div>&nbsp;</div>);
    }
}
