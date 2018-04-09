import React from "react";
import { connect } from "react-redux";
import Form from "./Form"
import Badge from "./Badge"

const mapStateToProps = state => {
    return state
}

const App = props => {
    console.log(props)
    const badges= props.data.map((badgeObj, index)=><Badge key={index} {...badgeObj} color={index}/>)
    return (
        <div>
            <Form />
            {badges}

        </div>
    )
}

export default connect(mapStateToProps)(App);