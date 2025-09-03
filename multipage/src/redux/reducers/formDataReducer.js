const intialState = {
    signUpData: {
        email: '',
        password: '',
        confirmPassword: ''
    },
    personalInfo: {
        firstName: '',
        lastName: '',
    },
    professionalInfo: {
        currentCompany: '',
        jobTitle: '',
        experience: ''
    }
}

export default function formDataReducer(state = intialState, action) {
    switch (action.type) {
        case "UPDATE_SIGNUP":
            return {
                ...state,
                signUpData: {
                    email: action.payload.email,
                    password: action.payload.password,
                    confirmPassword: action.payload.confirmPassword
                }
            };
        case "UPDATE_PERSONAL":
            return {
                ...state,
                personalInfo: {
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName
                }
            };
        case "UPDATE_PROFESSIONAL":
            return {
                ...state,
                professionalInfo: {
                    currentCompany: action.payload.currentCompany,
                    jobTitle: action.payload.jobTitle,
                    experience: action.payload.experience
                }
            };
        case "CLEAR_FORM":
            return intialState;
        default:
            return state;
    }
}