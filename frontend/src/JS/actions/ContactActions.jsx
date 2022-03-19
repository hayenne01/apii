import axios from  "axios"
import {  GETCONTACT, GETCONTACTS } from "../actionTypes/ContactTypes"
export const getcontacts= ()=>async (dispatch)=> {
    try {
        const res = await axios.get('/contacts')
    dispatch ({type:GETCONTACTS , payload:res.data })
    } catch (error) {
        console.log(error)
    }
    };
    export const deleteContact =  (_id) => async (dispatch)=>{

   try {
    await axios.delete(`/contacts/${_id}`)
    dispatch(getcontacts())
   } catch (error) {
       console.log(error)
   }

      };
      export const addcontacts= (data)=>async (dispatch)=> {
        try {
           await axios.post('/contacts',data)
           dispatch(getcontacts());
        } catch (error) {
            console.log(error)
        }
        };
        export const updatecontacts= (id, data)=>async (dispatch)=> {
            try {
               await axios.put(`/contacts/${id}`,data)
               dispatch(getcontacts());
            } catch (error) {
                console.log(error)
            }
            };
            export  const showcontact= (id)=>async (dispatch)=> {
                try {
                  const res =  await axios.get(`/contacts/${id}`)
                   dispatch({type:GETCONTACT,payload:res.data});
                } catch (error) {
                    console.log(error)
                }
                };
        
    