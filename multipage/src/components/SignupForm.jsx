import React from 'react'
import { useEffect } from 'react';

export default function SignupForm(props) {

    // local react state
    const intialData = {
        email: '',
        password: '',
        confirmPassword: ''
    }
    let [signUpData, setSignUpData] = React.useState(intialData);

    // componentDidMount
    useEffect(() => {
        if (props.signUpData) {
            setSignUpData(props.signUpData);
        }
    }, []);

    // componentDidUpdate
    useEffect(() => {
        props.updateSingUpData(signUpData); // dispatch to redux store
    }, [signUpData.email, signUpData.password, signUpData.confirmPassword])

    return (
        <div>
            <h1>Sign Up Data</h1>
            <form>
                Email: <input type="email" value={signUpData.email} name="email" placeholder='Email' onChange={e => setSignUpData({ ...signUpData, email: e.target.value })} /><br /><br />
                Password: <input type="password" value={signUpData.password} name="password" placeholder='Password' onChange={e => setSignUpData({ ...signUpData, password: e.target.value })} /><br /><br />
                Confirm Password: <input type="password" value={signUpData.confirmPassword} name="confirmPassword" placeholder='Confirm Password' onChange={e => setSignUpData({ ...signUpData, confirmPassword: e.target.value })} /><br />
            </form>
        </div>
    )
}
