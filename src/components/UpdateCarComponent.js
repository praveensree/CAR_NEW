import React, { Component } from 'react'
import CarService from '../services/CarService';

class UpdateCarComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Id: this.props.match.params.id,
            CarName: '',
            CarPrice: ''
        }
        this.changeCarNameHandler = this.changeCarNameHandler.bind(this);
        this.changeCarPriceHandler = this.changeCarPriceHandler.bind(this);
        this.updateCars = this.updateCars.bind(this);
    }

    componentDidMount(){
        CarService.getCarsById(this.state.Id).then( (res) =>{
            let car = res.data;
            this.setState({CarName: car.name,
                CarPrice: car.price
            });
        });
    }

    updateCars = (e) => {
        e.preventDefault();
        let car = {Name: this.state.CarName, Price: Number(this.state.CarPrice)};
        console.log('car => ' + JSON.stringify(car));
        console.log('id => ' + JSON.stringify(this.state.Id));
        car = JSON.stringify(car);
        this.state.Id = Number(this.state.Id);
        CarService.updateCars(car, this.state.Id).then( res => {
            this.props.history.push('/');
        });
    }
    
    changeCarNameHandler= (event) => {
        this.setState({CarName: event.target.value});
    }

    changeCarPriceHandler= (event) => {
        this.setState({CarPrice: event.target.value});
    }


    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Car</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Car Name: </label>
                                            <input placeholder="Car Name" name="CarName" className="form-control" 
                                                value={this.state.CarName} onChange={this.changeCarNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Car_Price: </label>
                                            <input placeholder="Price" name="CarPrice" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeCarPriceHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.updateCars}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateCarComponent