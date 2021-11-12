import React from "react";
import classes from "./ListItem.module.css";


class ListItem extends React.Component{

    render(){
        return(
            <div style={{marginTop:'20px', padding:"10px 15px", borderRadius:'10px', border:'solid black 1px', backgroundColor:'lightgray'}} onClick={this.props.click}>
                <p className = {classes.listitem}>{this.props.title}</p>
                <p>{this.props.keyA}</p>
            </div>
        )
    }
}

export default ListItem;