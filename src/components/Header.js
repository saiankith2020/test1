import React from 'react'
import Display from './Display';



class Header extends  React.Component{
    constructor(){
        super()
        this.state={
            
            user: "text me here"
        }
    }

    changetext = (e)=>{
        this.setState({user:e.target.value?e.target.value:"user text here"})
        this.props.getting(e.target.value)

    } 
    render(){
        return(
            <React.Fragment>
                <h1>Developer funnel</h1>
                <input onChange={this.changetext} placeholder ="hey hi"/>
                {this.state.user}

            </React.Fragment> 
        )
    }
}

export default Header;