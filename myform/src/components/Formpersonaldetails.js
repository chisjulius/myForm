
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

 class Formpersonaldetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange} = this.props;
        return(
         <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter Personal Details"/>
                <TextField
                hintText="Enter Your Occupation"
                floatingLabelText="Occupation"
                onChange={ handleChange("occupation") }
                defaultValue={values.occupation}
                />
                                <br/>
                <TextField
                hintText="Enter Your City"
                floatingLabelText="City"
                onChange={ handleChange ("city")}
                defaultValue = { values.city }
                />
                <br/>
                <TextField
                hintText="Enter Your Bio"
                floatingLabelText="Bio"
                onChange={ handleChange ("bio")}
                defaultValue = { values.bio }
                />
                <br/>

                
                <button className=" button2" onClick = {this.back} >
                    Back
                </button>
                <button className=" button" onClick = {this.continue} >
                    Continue
                </button>

            </React.Fragment>
        </MuiThemeProvider>
        )
    }
}

export default Formpersonaldetails