import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import './App.css'

const API_KEY = "7082790185ad447a99cdc012b9740f92"
class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined, 
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        let city = e.target.elements.city.value;
        
       if (city){

        const api_url = await 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        const data = await api_url.json();
        if (!(data.message === "city not found")){
        let sunset = data.sys.sunset;
        let date = new Date();
        date.setTime(sunset);
        let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        

        this.setState({
            temp: (Math.round( data.main.temp - 273.15 ) ),
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            sunset: sunset_date,
            error: undefined,
        });}
        else{
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: "введите корректное значение", 
            }); 
        }
    }else{
        this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            sunrise: undefined,
            sunset: undefined,
            error: "введите название города", 
        }); 
    }
}
    render() {
        return (
            <div className="main">
        <div className="container">
            <div className="app">
           <Info />
           <Form weatherMethod={this.gettingWeather} />
           <Weather 
           temp={this.state.temp}
           city={this.state.city}
           country={this.state.country}
           pressure={this.state.pressure}
           sunset={this.state.sunset}
           error={this.state.error}

           /> 
           </div>
        </div>
        </div>
        );
    }
}

export default App; 