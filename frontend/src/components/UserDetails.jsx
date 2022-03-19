import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { showcontact } from '../JS/actions/ContactActions'
import "./card.css"
const UserDetails = () => {
    const dispatch = useDispatch()
    const {id}=useParams()
    console.log(id)
useEffect(() => {
 dispatch(showcontact(id))
  
}, [])
const contact = useSelector(state=>state.ContactReducer.contact)
  return (
    <div> 
    
        <Card className='carrd' style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Name: {contact.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Email: {contact.email}</Card.Subtitle>
      <Card.Text>
       Age: {contact.age}
      </Card.Text>
     
    </Card.Body>
  </Card></div>
  )
}

export default UserDetails