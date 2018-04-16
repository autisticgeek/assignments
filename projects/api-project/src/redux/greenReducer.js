import axios from "axios";


const initialState = {
    trains:[],
    loading: true,
    errMsg: ""
}


const greenReducer = (state = initialState, action) => {
    console.log("action", action)
    switch (action.type) {
        case "GET_GREEN":
            return {
                // ...state,
                trains:action.green,
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


export const getGreen = (utaRoute) => {
const apiUrl = `https://vschool-cors.herokuapp.com/?url=http://api.rideuta.com/SIRI/SIRI.svc/VehicleMonitor/ByRoute?route=${utaRoute}&onwardcalls=true&usertoken=USEKQBT0XC3`;
    return dispatch => {
        axios.get(apiUrl)
            .then(response => {
                dispatch({
                    type: "GET_GREEN",
                    green: response.data.Siri.VehicleMonitoringDelivery[0].VehicleActivity[0].MonitoredVehicleJourney

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

export default greenReducer;