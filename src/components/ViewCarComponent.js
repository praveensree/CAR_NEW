import React, { Component } from 'react'
import CarService from '../services/CarService'


var cars = {};
class ViewCarComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Id: this.props.match.params.id,
            car: []
        }
        
    }

    componentDidMount(){
        CarService.getCarsById(this.state.Id).then( res => {
            this.setState({car: res.data});
            console.log(this.state.car);
            cars = this.state.car;
            console.log(cars);
        })

        console.log("cc" + this.state.car);
    }

    render() {
        return (
            
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Car Details</h3>
                    <div className = "card-body">
                    {
                                    this.state.car.map(
                                       cars => 
                                        <tr key = {cars.id}>
                                             <td> { cars.name} </td>   
                                             <td> {cars.price}</td>                                                                                      
                                        </tr>
                                    )
                    }
                      
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCarComponent