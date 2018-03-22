import React from "react";
import {render} from "react-dom";

class TestApp extends React.Component{
    render(){
        return(
            // Similar to document.creteElement() in ES5
            <div className="container">
                <div className="row">
                    <div className=".col-xs-10.col-xs-offset-10">
                        <h1> Hello Anjali! </h1>
                    </div>
                </div>


            </div>
        );
    }
}

render(<TestApp/>, window.document.getElementById("testApp") );