import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


 class Sucess extends Component {
    continue = e =>{
        e.preventDefault();
        //Process form
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return(
         <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Sucess"/>
                <h1>Thank You For Your Submission</h1>
                <p>You will get an email for further instructions</p>
            </React.Fragment>
        </MuiThemeProvider>
        )
    }
}

export default Sucess