import React, { Component } from 'react'
import CarService from '../services/CarService';

class CreateCarComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            Id: this.props.match.params.id,
            CarName: '',
            CarPrice: ''
        }
        this.changeCarNameHandler = this.changeCarNameHandler.bind(this);
        this.changeCarPriceHandler = this.changeCarPriceHandler.bind(this);
        this.saveOrUpdateCar = this.saveOrUpdateCar.bind(this);
    }

    saveOrUpdateCar = (e) => {
        e.preventDefault();
        let car = {Name: this.state.CarName, Price: Number(this.state.CarPrice)};
        console.log('car => ' + JSON.stringify(car));
        car = JSON.stringify(car);
        CarService.createCars(car).then(res =>{
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

    getTitle(){

            return <h3 className="text-center">Add Cars</h3>
        
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Car Name: </label>
                                            <input placeholder="Car Name" name="CarName" className="form-control" 
                                                value={this.state.CarName} onChange={this.changeCarNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Car Price: </label>
                                            <input placeholder="Price" name="CarPrice" className="form-control" 
                                                value={this.state.CarPrice} onChange={this.changeCarPriceHandler}/>
                                        </div>
                                       

                                        <button className="btn btn-success" onClick={this.saveOrUpdateCar}>Save</button>
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

export default CreateCarComponent