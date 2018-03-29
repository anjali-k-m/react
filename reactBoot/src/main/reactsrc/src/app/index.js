import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";

class TestApp extends React.Component{
    render(){
        return(
            // Similar to document.creteElement() in ES5
            <div className="container">
            
            	<Header/>
                <div className="row">
                    <div className=".col-xs-10.col-xs-offset-50">
                        <p> Hello </p>
                    </div>
                </div>
                <Home/>


            </div>
        );
    }
}

render(<TestApp/>, window.document.getElementById("testApp") );