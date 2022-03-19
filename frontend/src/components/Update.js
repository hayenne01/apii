import { useState } from "react";
import {useDispatch} from 'react-redux'
import {updatecontacts} from '../JS/actions/ContactActions'
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UpdateContact = ({cellValues }) => {
    console.log('cellValues' , cellValues)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState({
    
    name: cellValues.row.name,
    age: cellValues.row.age,
    email: cellValues.row.email,
 
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.id]: e.target.value });
  };
  const handleContact = (e) => {
    // when i wlick to add Contact
    // prevent the refresh of the form
    e.preventDefault();
    // sending the data to the app
    // handleAdd(contact);
    dispatch(updatecontacts( cellValues.id ,  contact ))
    // setting movie to initial value
    setContact({
     
      name: "",
      age: 0,
      email: "",
   
    });
    // close the modal
    handleClose();
  }; 

  return (
    <div>
      <Button  variant="contained"
                  color="primary"  onClick={handleOpen}>
       Edit
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={(e) => handleContact(e)}>
              <ul>
                <li>
                  <label>Enter Contact Name:</label>
                  <input
                    required
                    type="text"
                    id="name"
                    onChange={handleChange}
                    value={contact.name}
                  />
                </li>
                <li>
                  <label>Contact Age:</label>
                  <input type="number" id="age" onChange={handleChange}  value={contact.age} />
                </li>
                <li>
                  <label>Email:</label>
                  <input type="text" id="email" onChange={handleChange}  value={contact.email} />
                </li>
               
              </ul>
              <input type="submit" onClick={handleContact} />
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default UpdateContact;