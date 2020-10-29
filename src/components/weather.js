import React from "react";
class Weather extends React.Component{
    render(){
        return (
            <div className="weat">
                {this.props.city &&
                <div>
                <p>Местоположение: {this.props.city}, {this.props.country} </p>
                <p>Температура: {this.props.temp} </p>
                <p>Давление: {this.props.pressure} </p>
                <p>Закат: {this.props.sunset} </p>
                
                </div>
                
                }
                <p>{this.props.error}</p> 
                
            </div>
        );
    }
}

export default Weather;