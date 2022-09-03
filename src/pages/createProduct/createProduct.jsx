import React, { useState, useEffect } from "react";

import "./createProduct.css";
import Sidebar from "../../components/Dashboard/sidebar/Sidebar";
import {
  collection,
  addDoc,
  serverTimestamp,
  // getDoc,
  // updateDoc,
  // doc
} from "firebase/firestore";
import { storage, db } from "../../firebse/firebase-config";
import { ref, uploadBytesResumable,  getDownloadURL } from "firebase/storage";



const initialState = {
  title : "",
  client : "",
  location : "",
  key : "",
  description : "",
  date : "",
}

export default function CreateProduct() {

  const [ data, setData] = useState(initialState);
  const {title, client, location, key, description, date} = data;
  const [file, setFile] = useState("");
  const [progress, setProgress] = useState(null)
   
  const [errors, setErrors] = useState({});
  
 

 
  useEffect(() =>{
    const uplloadFile = () => {
     const storageRef = ref(storage, file.name);
     const uploadTast = uploadBytesResumable(storageRef, file)

     uploadTast.on("state_changed", (snapshot) => {
       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       setProgress(progress)
       switch (snapshot.state) {
         case "paused":
           console.log("upload is paused");
           break;
           case "running":
           console.log("upload is runnig");
           break;
           default:
             break

       }
     }, (error) => {
         console.log(error)
     },
     () => {
       getDownloadURL(uploadTast.snapshot.ref).then((downloadURL) => {
         setData((prev) => ({...prev, img: downloadURL}));
       });   
     } 
     );

    };

    file && uplloadFile()
}, [file])


 
  const handleChamge = (e) => {
    setData({...data, [e.target.name]: e.target.value});
}; 

const validate = () => {
let errors = {};
if(!title) {
  errors.title = "Title is required"
}
if(!description) {
  errors.title = "Description is required"
}
if(!location) {
  errors.location = "Location is required"
}
if(!key) {
  errors.key = "Key is required"
}
if(!date) {
  errors.title = "Date is required"
}

return errors; 
};  
const handleSubmit = async (e) => {
    e.preventDefault(); 
    let errors = validate();
    if(Object.keys(errors).length) return setErrors(errors);
    await addDoc(collection(db, "projects"), {
      ...data,
      timestamp : serverTimestamp()
    });
    alert("Project uploaded Successfuly !!!")
}; 


  return (
    <div className="main" style={{display:"flex"}}>
 <Sidebar />
    
    <div className="newUser">

      <h1 className="newUserTitle">Add New Project</h1>
      <div className="row " style={{display:"flex"}}>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="displayImage"
            />

               

                <input
                  type="file"
                
                  onChange={(e) => setFile(e.target.files[0])}
                />
         
          </div>

      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Title</label>
          <input
                 type="text"
                 placeholder="name of project"
                 errors={errors.title ? {content: errors.title} : null }
                 value={title}
                 name="title"
                 onChange={handleChamge}
                 className="addProjectnput"
                 required
           />
        </div>
        <div className="newUserItem">
          <label>Client</label>
          <input 
              type="text" 
              placeholder="Client" 
              errors={errors.client ? {content: errors.client} : null }
              value={client}
              name="client"
              onChange={handleChamge}
              className="addProjectInput"
              required
              />
        </div>
        <div className="newUserItem">
          <label>Date</label>
          <input 
              type="date" 
              placeholder="password" 
              errors={errors.date ? {content: errors.date} : null }
              value={date}
              name="date"
              onChange={handleChamge}
              className="addProjectInput"
              required
              />
        </div>
        <div className="newUserItem">
          <label>Location</label>
          <input 
               type="text" 
               placeholder="Location" 
               name="location"
               errors={errors.location ? {content: errors.location} : null }
               value={location}
               onChange={handleChamge}
               required
               />
        </div>
        <div className="newUserItem">
          <label>key</label>
          <input   
                 type="number"
                 name="key"
                 errors={errors.key ? {content: errors.key} : null }
                 value={key}
                 onChange={handleChamge}
                 className="addProjectInput"
                 required
          />
        </div>
        <div className="newUserItem">
          <label>Description</label>
          <textarea   
                  type="textarea"
                  errors={errors.description ? {content: errors.description} : null }
                  value={description}
                  onChange={handleChamge}
                  name="description"
                  className="addProjectInput"
                  required
          />
        </div>
         
        
        <button  type="Submit" className="newUserButton" disabled={progress !== null && progress < 100}>
          Create
          </button>
      </form>
    </div>
    </div>
  );
}
