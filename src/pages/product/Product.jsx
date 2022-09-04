import React from "react";

import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/Dashboard/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import Sidebar from "../../components/Dashboard/sidebar/Sidebar";
import Project from "../../photos/ourServices.jpg";


export default function Product() {
  return (
    <div className="main" style={{display:"flex"}}>
    <Sidebar />
    
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Project</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={Project} alt="" className="productInfoImg" />
            
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Title:</span>
                      <span className="productInfoValue"></span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Client:</span>
                      <span className="productInfoValue"></span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Location:</span>
                      <span className="productInfoValue"></span>
                  </div>
                  
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Project Name</label>
                  <input type="text"  />
                  <label>Status</label>
                  <select name="active" id="active">
                      <option value="yes">In Progress</option>
                      <option value="no">Completed</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={Project} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
    </div>
  );
}
