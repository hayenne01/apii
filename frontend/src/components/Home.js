import { Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getcontacts } from '../JS/actions/ContactActions'
import { Link } from 'react-router-dom'
const Home = () => {
    const dispatch=useDispatch()
    return ( < div style = {
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px",
            }
        } >

    <Link to='/contactlist'  ><Button onClick={()=>dispatch(getcontacts())} variant = 'primary' style = {  { marginRight: '30px' }} >
         Contact List
         </Button> </Link> 
      
     </div>
    )
}

export default Home