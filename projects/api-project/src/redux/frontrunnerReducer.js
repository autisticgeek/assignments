import axios from "axios";


const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}


const frontrunnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TRAIN":
            return {
                ...state,
                data: action.frontrunner,
                loading: false
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        default:
            return state;
    }
}
const utaRoute=750
const apiUrl = `http://cors.vschool.io?url=http://api.rideuta.com/SIRI/SIRI.svc/VehicleMonitor/ByRoute?route=${utaRoute}&onwardcalls=true&usertoken=USEKQBT0XC3`;

export const getFrontrunner = () => {
    return dispatch => {
        axios.get(apiUrl)
            .then(response => {
                dispatch({
                    type: "GET_TRAIN",
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