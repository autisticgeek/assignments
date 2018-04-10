import React from "react";
import {connect} from "redux"



class PlanetList extends React.Component {
    mapStateToProps= state =>{
        return {state}
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect(mapSteteToProps,{getPlanets})(PlanetList)