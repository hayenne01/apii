import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getcontacts } from "../JS/actions/ContactActions";
import { Button } from "@mui/material";
import Update from './Update'


export default function BasicColumnsGrid() {
  const rows = useSelector((state) => state.ContactReducer.contacts);
  console.log(rows);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getcontacts());
  }, []);

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        columns={[
          { field: "name", minWidth: 150 },
          { field: "age" },
          { field: "email", minWidth: 250 },
          { field: "_id", minWidth: 250 },
           
          {
            field: "update",

            renderCell: (cellValues ) => {
              return (
                <Update cellValues={cellValues} />
              );
            },
          },


          {
            field: "Delete",

            renderCell: (cellValues ) => {
              return (
                <Button
                  onClick={() => dispatch(deleteContact(cellValues.id))}
                  variant="contained"
                  color="primary"
                >
                  Delete
                </Button>
              );
            },
          },
          {
            field: "User Details",

            renderCell: (cellValues ) => {
              return (
                
                <Button 
            
                onClick={ (e) => {
                  e.preventDefault();
                  window.location.href=`/userdetails/${cellValues.id}`;
                  }}                  variant="contained"
                  color="primary"
                  
                >
                  Details
                </Button>

              );
            },
          },
          
          
        ]}
        rows={rows}
      />
      <Modal />
    </div>
  );
}
