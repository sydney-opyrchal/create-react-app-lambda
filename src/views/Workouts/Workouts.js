import React from 'react';


/*import logo from '../../assets/logo.svg';*/

import './Workouts.css';
//import {Forum} from './Forum/forum'

function Workouts() {
    
    return (
        
        
        <div className="App">
            <header className="App-header"> 
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
            </header>
            
            <div class="container">
             <div class="row my-row-spacer-30"></div>
                <div class="row justify-content-center fit-row">
                    <h1>Workouts</h1>
                </div>
                <div class="row fit-row">
                    <div class="col d-flex justify-content-center fit-col">
                        <div>Here you can find workout inspiration!</div>
                    </div>
                </div>
                <div class="row my-row-spacer-65"></div>
                <div class="row fit-row">
                    <div class="col-md-4 fit-col">
                        <div class="row justify-content-center fit-row">
                            <h3>Cardio Workout Idea</h3>
                            <div class="row justify-content-center fit-row">
                                <div class="col fit-col">
                                    <div>
                                        Try a throwback to your childhood and jumprope! Jumping rope is a great way to get your heart rate up while still having fun.
                                    </div>
                                    {/*<img class="card-img-top" src={froot} alt="Card image cap" />*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 fit-col">
                        <div class="row justify-content-center fit-row">
                            <h3>Strength Training Idea</h3>
                            <div class="row justify-content-center fit-row">
                                <div class="col fit-col">
                                    <div>
                                        When lifting weights, try to focus on your form. Being able to lift heavy weights is great, but it's meaningless without good form.
                                    </div>
                                    {/*<img class="card-img-top" src={watta} alt="Card image cap" />*/}
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div class="col-md-4 fit-col">
                        <div class="row justify-content-center fit-row">
                            <h3>Relaxed Workout Idea</h3>
                            <div class="row justify-content-center fit-row">
                                <div class="col fit-col">
                                    <div>
                                        Go for a walk! It seems simple, but going for a walk is a simple way to get some activity in. Any movement is better than no movement!
                                    </div>
                                    {/*<img class="card-img-top" src={pillz} alt="Card image cap" />*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-row-spacer-100"></div>
                <div class="container-fluid w-100">
                    <div class="row fit-row">
                        <div class="col d-flex justify-content-left fit-col">
                            <h2>Resources</h2>
                        </div>
                    </div>
                    <div class="row fit-row">
                        <div class="col d-flex justify-content-left fit-col">
                            <ul>
                                <li><a href="https://www.fitnessblender.com/" target="_blank">Workout video resources</a></li>
                                <li><a href="https://www.medicalnewstoday.com/articles/best-cardio-workouts" target="_blank">Cardio Tips</a></li>
                                <li><a href="https://www.self.com/story/8-strength-exercises" target="_blank">Tips for strength training</a></li>
                            </ul>   
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    );
}

export default Workouts;
