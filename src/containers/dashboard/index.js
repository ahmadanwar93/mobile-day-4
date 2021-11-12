import React from "react";
import ListItem from "../../components/ListItem";

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items : [],
        }
        this.addNew = this.addNew.bind(this);
    }

    addNew(){
        // console.log('press');
        // console.log(this._inputElement.value);
                
        // push the value to an array
        if (this._inputElement.value !== ""){
            const newItem = {
                title: this._inputElement.value,
                key: Date.now(),
            };
            // this.setState({items: this._inputElement.value}, ()=>{console.log(this.state.items)});

            // method 1
            // this.setState((prevState) => {
            //     console.log('ps',prevState);
            //     return {items: prevState.items.concat(newItem)}
            // },
            // () => console.log(this.state.items))

            // method 2
            this.setState({items: [...this.state.items, newItem]}, ()=>console.log(this.state.items));
        }
    }

    delete(value){
        const filterItem = this.state.items.filter(list=> list.key !== value)
        this.setState({items:filterItem})
    }

    render(){
        return(
            <div style={{width:'80vw', margin:'0 auto', marginTop: '100px', backgroundColor:'skyblue', paddingTop:'10px'}}>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <input 
                    type='text' 
                    style={{marginRight:'10px'}} 
                    ref={(a)=> this._inputElement = a}>
                        
                    </input>
                    <button onClick={this.addNew}>Add new item</button>
                </div>
                <div>
                    {/* <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem /> */}

                    {
                        this.state.items.map((list) => (
                            <ListItem keyA={list.key} title={list.title} click ={() => this.delete(list.key)} />
                        )) 
                    }
                </div>
            </div>
        )
    }
}

export default Dashboard;