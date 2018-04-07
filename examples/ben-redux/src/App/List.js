import React from "react";
import { connect } from "react-redux";
import {removeCat, editCat} from "../redux/cats"
import Item from "./Item"


const mapStateToProps = state => {
    return state
}


const List = (props) => {
    const handleClick = index => {
        props.removeCat(index)
    }
    const handleSubmit = e => {
        e.preventDefault();
        const cat={
            index: parseInt(e.target.index.value, 10),
             imgUrl : e.target.imgUrl.value,
             caption : e.target.caption.value
        }
        props.editCat(cat);
    }
    const catList= props.cats.data.map((catObj, index) => <Item key={index} {...catObj} index={index} handleClick={handleClick} handleSubmit={handleSubmit}/>)
    return (
        <div>
            {catList}
        </div>
        )
    }
    
export default connect(mapStateToProps, {removeCat, editCat})(List)