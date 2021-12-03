import axios from "axios";


const EMPLOYEE_API_BASE_URL = "https://localhost:44377/api";

class CarService {

    getCars(){
        return axios.get(EMPLOYEE_API_BASE_URL+"/Car");
    }

    createCars(car){
        return axios.post(EMPLOYEE_API_BASE_URL+"/Car", car, {headers: {'Content-Type': 'application/json'}} );
    }

    getCarsById(Id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/Car/' + Id);
    }

    updateCars(car, Id){
        return axios.put(EMPLOYEE_API_BASE_URL + '/Car/' + Id, car, {headers: {'Content-Type': 'application/json'}});
    }

    deleteCars(Id){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/Car/' +Id);
    }
}

export default new CarService()