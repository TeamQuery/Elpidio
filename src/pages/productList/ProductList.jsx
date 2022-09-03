import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";

import { db } from "../../firebse/firebase-config";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";

import "./productList.css";
import Sidebar from "../../components/Dashboard/sidebar/Sidebar";
import Topbar from "../../components/Dashboard/topbar/Topbar";

export default function ProductList() {

  
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  
  function truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }
  
const handleDelete = async (id) => {
  if(window.confirm("Are you sure you want to delete this project?")) {
  
      const projectDoc = doc(db, "projects", id);
      return deleteDoc(projectDoc);
     
    }  
  
 
}




useEffect(() => {

  const unsub = onSnapshot(
    collection(db, "projects"),
     (snapshot) => {
       let list = [];
    snapshot.docs.forEach((doc) =>{
      list.push({id: doc.id, ...doc.data()});
    });
    setProjects(list);
    
  },
   (error) => {
    console.log(error)
  }
   );

   return () =>{
    unsub();
  };

}, []);
   
  
  return (
    <>
    


    <Topbar />
    <div className="main" style={{display:"flex"}}>
    <Sidebar />

    <div className="productList">
    <div className="productTitleContainer">
        <h1 className="productTitle">Project List</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
    <TableContainer component={Paper} className="table">
      <Table sx={{ width: 1100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" style={{fontSize:"20px", color:"lightblue"}}>Project Key</TableCell>
            <TableCell className="tableCell" style={{fontSize:"20px", color:"lightblue"}}>Image</TableCell>
            <TableCell className="tableCell" style={{fontSize:"20px", color:"lightblue"}}>Title</TableCell>
            <TableCell className="tableCell" style={{fontSize:"20px", color:"lightblue"}}>Customer/Client</TableCell>
            <TableCell className="tableCell" style={{fontSize:"20px", color:"lightblue"}}>Location</TableCell>
            <TableCell className="tableCell" style={{fontSize:"20px", color:"lightblue"}}>Date</TableCell>
            <TableCell className="tableCell" style={{fontSize:"20px", color:"lightblue"}}>Description</TableCell>
            <TableCell className="tableCell" style={{fontSize:"20px", color:"lightblue"}}>Actions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {projects && projects.map((doc, ) => {
            return (
            <TableRow  key={doc.id}>
              <TableCell className="tableCell"><h5>{doc.key}</h5></TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={doc.img} alt="" className="image" /> 
                </div>
              </TableCell>
              <TableCell className="tableCell"> <h5>{doc.title}</h5> </TableCell>
              <TableCell className="tableCell"><h5>{doc.client}</h5></TableCell>
              <TableCell className="tableCell"><h5>{doc.date}</h5></TableCell>
              <TableCell className="tableCell"><h5>{doc.location}</h5></TableCell>
              <TableCell className="tableCell"><h5>{truncateString(doc.description , 20)}</h5></TableCell>
             
              
              <TableCell className="tableCell">
                <div className="cellAction">
                  <Link to="/product"
                    style={{border:"none", padding:"10px 15px", background:"Green", color:"#fff", borderRadius:"5px", textDecoration:"none"}}
                  >
                    <div className="viewButton">View</div>
                  </Link>
                  <button
                   style={{border:"none", padding:"10px 15px", background:"teal", color:"#fff", borderRadius:"5px"}}
                   onClick={() => navigate(`/update ${doc.id}`)}    
                 
                   >
                    <div className="viewButton">Edit</div>
                  </button>

                  <button
                  style={{border:"none", padding:"10px 15px", background:"red", color:"#fff", borderRadius:"5px"}}
                    className="deleteButton"
                    onClick={(e) => handleDelete(doc.id)} 
                  >
                    Delete
                  </button>

                </div>
              </TableCell>
            </TableRow>
          );
        })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
</>
  );
}
