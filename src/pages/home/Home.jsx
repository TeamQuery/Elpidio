import React from "react";

import Chart from "../../components/Dashboard/chart/Chart";
import FeaturedInfo from "../../components/Dashboard/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import Sidebar from "../../components/Dashboard/sidebar/Sidebar";
import Topbar from "../../components/Dashboard/topbar/Topbar";


export default function Home() {
  return (
    <>
    <Topbar />
    <div className="main" style={{display:"flex"}}>
    <Sidebar />
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Analytics" grid dataKey="Active User"/>
    </div>
    </div>
    </>
  );
}
