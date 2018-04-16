import axios from "axios";


const initialState = {
    trains: [],
    loading: true,
    errMsg: ""
}


const frontrunnerReducer = (state = initialState, action) => {
    console.log("action", action)
    switch (action.type) {
        case "GET_FRONTRUNNER":
            return {
                // ...state,
                trains:action.frontrunner,
                loading: false
            }
        case "ERR_MSG":
            return {
                // ...state,
                loading: false,
                errMsg: action.errMsg
            }
        default:
            return state;
    }
}


export const getFrontrunner = (utaRoute) => {
const apiUrl = `https://vschool-cors.herokuapp.com/?url=http://api.rideuta.com/SIRI/SIRI.svc/VehicleMonitor/ByRoute?route=${utaRoute}&onwardcalls=true&usertoken=USEKQBT0XC3`;
    return dispatch => {
        axios.get(apiUrl)
            .then(response => {
                dispatch({
                    type: "GET_FRONTRUNNER",
                    frontrunner: response.data.Siri.VehicleMonitoringDelivery[0].VehicleActivity[0].MonitoredVehicleJourney

                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, you're data is unavailable"
                });
            });
    }
}
//getTrain();

export default frontrunnerReducer;