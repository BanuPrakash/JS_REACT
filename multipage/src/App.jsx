import {connect} from 'react-redux'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import ProfessionalInfo from './components/ProfessionalInfo'
import SignupForm from './components/SignupForm'
import Steps from './components/Steps'
import NavigationButton from './components/NavigationButton'
import Confirm from './components/Confirm'

function App(props) {
 
  const PageDisplay = (page) => {
    switch (page) {
      case 0:
        return <SignupForm 
          signUpData={props.formData.signUpData}
          updateSingUpData={props.updateSingUpData}/>
      case 1:
        return <PersonalInfo 
          personalInfo={props.formData.personalInfo}
          updatePersonalInfo={props.updatePersonalInfo}
          />
      case 2:
        return <ProfessionalInfo 
          professionalInfo={props.formData.professionalInfo}
          updateProfessionalInfo
          />
      case 3:
        return <Confirm 
          formData={props.formData}
          clearForm={props.clearForm}
          />
  
    }
  }
  return (
    <div>
      <Steps page={props.page}/>
      <div>
        { PageDisplay(props.page) }
        {props.page != 3 && <NavigationButton page={props.page} 
          nextPage={props.nextPage} 
          prevPage = {props.prevPage }/>}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    page: state.page.page,
    formData: state.formData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nextPage: () => dispatch({ type: "NEXT_PAGE" }),
    prevPage: () => dispatch({ type: "PREV_PAGE" }),
    updateSingUpData: (data) => dispatch({ type: "UPDATE_SIGNUP", payload: data }),
    updatePersonalInfo: (data) => dispatch({ type: "UPDATE_PERSONAL", payload: data }),
    updateProfessionalInfo: (data) => dispatch({ type: "UPDATE_PROFESSIONAL", payload: data }),
    clearForm: () => dispatch({ type: "CLEAR_FORM" })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
