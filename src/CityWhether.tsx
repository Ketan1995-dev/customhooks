import { IWhethers } from "./App";

const CityWhether = (props:IWhethers)=>{

    return (
        <div className="container">
            <h1>{props.city}</h1>
            <p>
                <ul>
                    <li>TemparatureC : {props.temperatureC}</li>
                    <li>TemparatureF : {props.temperatureF}</li>
                    <li>Summary : {props.summary}</li>
                    <li>Date : {props.date}</li>
                </ul>
            </p>
        </div>
    );

};

export default CityWhether;

