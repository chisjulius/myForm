import React, { Component } from 'react';
import Formuserdetails from './Formuserdetails'
import Formpersonaldetails from './Formpersonaldetails'
import Confirm from './Confirm'
import Sucess from './Sucess'

class Userform extends Component {
    state= {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: "",
    }

    //proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step : step + 1
        });
    }

        //go to the prev step
        prevStep = () => {
            const { step } = this.state;
            this.setState({
                step : step - 1
            });
        }

        //handle fields change

        handleChange = input => e =>{
           this.setState({
            [input]: e.target.value
           });
        }
        render(){
             const { step } = this.state;
             const  { firstName, lastName, email, occupation, city, bio } = this.state;
             const values = { firstName, lastName, email, occupation, city, bio };
            switch(step) {
                case 1:
                    return(
                        <Formuserdetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                    )
                case 2:
                    return(
                        <Formpersonaldetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                    )
                case 3:
                    return(
                        <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        />
                    )
                case 4:
                    return(
                        <Sucess/>
                    )
            }
    }
}
export default Userform