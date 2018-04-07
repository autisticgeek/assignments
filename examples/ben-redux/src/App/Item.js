import React from "react";

export default function Item(props) {
    const {caption, imgUrl, index, handleClick, handleSubmit} = props;
    return (
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
            <div>
            <img src={imgUrl} title={caption} alt={caption} style={{ display: "block" }} />{caption}<button onClick={() => handleClick(index)}>X</button>
            </div>
            <div>
                <form style={{display:"grid", gridTemplateRows:"1fr 1fr 1fr"}} onSubmit={handleSubmit}>
                    <input type="hidden" name="index"  value={index}/>
                    <input type="text" name="imgUrl"  defaultValue={imgUrl}/>
                    <input type="text" name="caption"  defaultValue={caption}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}