import React from "react";

const Weather = props => (
    <div className="weather__info">
        {
            props.description &&
            <p className="weather__key">status:
            <span className="weather__value"> {props.description}{props.icon}</span></p>

        }
        {
            props.temperature && 
            <p className="weather__key">celsius: 
            <span className="weather__value"> {props.temperature}°</span></p>
            
        }
        {
            props.humidity && 
            <p className="weather__key">fugt: 
            <span className="weather__value"> {props.humidity}</span></p>
            
        }

        {
            props.error && 
            <p><span className="weather__value">{props.error}</span></p>
            
        }
    </div>
)
export default Weather;