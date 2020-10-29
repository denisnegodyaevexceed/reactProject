import React from "react";
class Form extends React.Component{
    render(){
        return (
            <form className="form" onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Город" />
                <div>
                <button className="btn">Получить погоду</button>
                </div>
            </form>
        );
    }
}

export default Form;