import React from 'react'
import { useEffect } from 'react';

export default function PersonalInfo(props) {
  
    const intialData = {
        firstName: '',
        lastName: ''
    }
    let [personalInfo, setPersonalInfo] = React.useState(intialData);
    // componentDidMount
     useEffect(() => {
            if (props.personalInfo) {
                setPersonalInfo(props.personalInfo);
            }
        }, []);

    // componentDidUpdate
    useEffect(() => {
        props.updatePersonalInfo(personalInfo); // send to redux dispatch(action)
    }, [personalInfo.firstName, personalInfo.lastName])

    return (
        <div>
            <h1>Sign Up Data</h1>
            <form>
               First Name: <input type="firstName" 
                value={personalInfo.firstName} 
                    onChange={e => setPersonalInfo({ ...personalInfo, firstName: e.target.value })} /><br /><br />
               Last Name: <input type="lastName" 
                    value={personalInfo.lastName} 
                    onChange={e => setPersonalInfo({ ...personalInfo, lastName: e.target.value })}/><br /><br />
            </form>
        </div>
    )
}
