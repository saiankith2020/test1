import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import Display from "./Display"
import JSON from "../db.json"

class Home extends React.Component{
    constructor(){
        super()
        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterdata=(userInput)=>{
        const Output = this.state.news.filter((data) => {
            return (data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1 || data.feed.toLowerCase().indexOf(userInput.toLowerCase())>-1)
        })

        this.setState({filtered:Output})
    }

    render(){
        return(
            <div>
            <Header getting={(data)=>{this.filterdata(data)}}/>
            <Display newsdata={this.state.news} />
            <Footer/>
            </div>
            
        )
    }
}

export default Home;