import {  GETCONTACT, GETCONTACTS } from "../actionTypes/ContactTypes"

const initialstate= {
    contacts: [] , contact: {}
}
const ContactReducer = (state=initialstate,action) => {
    switch (action.type) {
        case GETCONTACTS:

            return {...state,contacts:action.payload};
          
             case GETCONTACT:

             return {...state,contact:action.payload};
            
          
    
        default: return state
          
    }
} 
export default ContactReducer ;