import React from 'react'
import { CommonPlannerFooter } from './CommonPlannerFooter';
import CommonPlannerTop from './CommonPlannerTop';
import '../styles/categories.css';


// new html layout
function PlannerStep1(props) {
    // Paso1- seleccionar tipo de plan (CATEGORIAS)
    return <div>

        <div class="wrapper">
				<section>

					<div class="row">
						<input type="button" value="Select all!" onClick={props.handleAll} />
					</div>

					<div class="row">


						{props.categories.map((plan) =>

							<div class="cat" key={plan.id}>
								<label class="contCheck">
									<input type="checkbox" onChange={props.onChange} value={plan.id} checked={props.selectedCategories.includes(plan.id)}  />
									<span class="checkmark"></span>
								</label>
								<div class="box">
								<div class="imgwrap">
									<img src={plan.icon} alt={plan.label} />
								</div>
								</div>
								<h3>{plan.label}</h3>
							</div>

                        )}

					</div>


					<div id="container">
						<div class="options" id="button-7">
                            <input type="button" value="Consultar actividades!" onClick={props.handleStep2} />
						</div>
					</div>
				</section>
		</div>
        
    </div>
}


export default PlannerStep1;


// main layout
/*
		<div class="row">
						<div class="cat">
								<label class="contCheck">
									<input type="checkbox" onChange={props.onChange} value={1}  />
									<span class="checkmark"></span>
								</label>
							<div class="box">
								<div class="imgwrap">
									<img src="images/icons/music2.png" alt="music" />
								</div>
							</div>
							<h3>Music, Concerts</h3>
						</div>
						<div class="cat">
								<label class="contCheck">
									<input type="checkbox" onChange={props.onChange} value={2} />
									<span class="checkmark"></span>
								</label>
							<div class="box">
								<div class="imgwrap">
									<img src="images/icons/food2.png" alt="food" />
								</div>
							</div>
							<h3>Restaurants</h3> 
						</div>
						<div class="cat">
								<label class="contCheck">
									<input type="checkbox" onChange={props.onChange} value={3} />
									<span class="checkmark"></span>
								</label>
							<div class="box">
								<div class="imgwrap">
									<img src="images/icons/sports2.png" alt="sports" />
								</div>
							</div>
							<h3>Sports</h3>  
						</div>
						<div class="cat">
								<label class="contCheck">
									<input type="checkbox" onChange={props.onChange} value={4} />
									<span class="checkmark"></span>
								</label>
							<div class="box">
								<div class="imgwrap">
									<img src="images/icons/art2.png" alt="arts" />
								</div>
							</div>
							<h3>Art & more</h3> 
						</div>
						<div class="cat">
								<label class="contCheck">
									<input type="checkbox" onChange={props.onChange} value={5} />
									<span class="checkmark"></span>
								</label>
							<div class="box">
								<div class="imgwrap">
									<img src="images/icons/eco2.png" alt="eco-tourism" />
								</div>
							</div>
							<h3>Ecotourism</h3> 
						</div>
						<div class="cat">
								<label class="contCheck">
									<input type="checkbox" onChange={props.onChange} value={6} />
									<span class="checkmark"></span>
								</label>
							<div class="box">
								<div class="imgwrap">
									<img src="images/icons/night_life2.png" alt="night life" />
								</div>
							</div>
							<h3>Night life</h3>
						</div>
						<div class="cat">
								<label class="contCheck">
									<input type="checkbox" onChange={props.onChange} value={7} />
									<span class="checkmark"></span>
								</label>
							<div class="box">
								<div class="imgwrap">
									<img src="images/icons/family2.png" alt="family" />
								</div>
							</div>
							<h3>Family</h3> 
						</div>
						<div class="cat">
		</div>

*/