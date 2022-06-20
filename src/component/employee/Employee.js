import React, { useState, useEffect } from "react";
import instance from "../../data/axios";

import Chart from 'react-apexcharts';

const Employee = () => {
  const [emplres, setEmpRes] = useState([]);

  //Gender Use State
  const [maleEmpRes, setMaleEmpRes] = useState([]);
  const [fmaleEmpRes, setFMaleEmpRes] = useState([]);

  //Card Type Use State
  const [maestroCardRes, setMaestroCardRes] = useState([]);
  const [visaCardRes, setVisaCardRes] = useState([]);
  const [masterCardRes, setMasterCardRes] = useState([]);

  useEffect(() => {
    getEmployeeDetails();
  }, []);

  const getEmployeeDetails = () => {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    instance
      .get("employee.json?key=e579ec80", config)
      .then((response) => {
        let result = response.data;
        setEmpRes(result);

        //Filter Male Employee
        let maleEmplResult = result.filter((x) => x.gender === "M");
        setMaleEmpRes(maleEmplResult);

        //Filter Female Employee
        let fmaleEmplResult = result.filter((x) => x.gender === "F");
        setFMaleEmpRes(fmaleEmplResult);

        //Filter Visa Card Type
        let visaCardResult = result.filter((x) => x.card_type === "visa");
        setVisaCardRes(visaCardResult);

        //Filter Master Card Type
        let masterCardResult = result.filter(
          (x) => x.card_type === "mastercard"
        );
        setMasterCardRes(masterCardResult);

        //Filter Maestro Card Type
        let maestroCardResult = result.filter((x) => x.card_type === "maestro");
        setMaestroCardRes(maestroCardResult);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cardTypeData = [
    { x: "MAESTRO CARD", y: maestroCardRes.length },
    { x: "MASTER CARD", y: masterCardRes.length },
    { x: "VISA CARD", y: visaCardRes.length },
  ]

  return (
    <div className="container-fluid">
      <div className="rounded">
        <div className="row">
          <h4>Key Performance Indicators</h4>
          <div className="col-md-8 col-lg-8">
            <Chart type="pie" series={[maleEmpRes.length,fmaleEmpRes.length]} options={{title:{text:"Gender"}, labels:["MALE","FEMALE"]}} />
          </div>
          <div className="col-md-4 col-lg-4">
            <ul>
              <li className="emp-list-style">TOTAL USERS = {emplres.length}</li>
              <li className="emp-list-style">MALE = {maleEmpRes.length}</li>
              <li className="emp-list-style">FEMALE = {fmaleEmpRes.length}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-lg-8">
          <Chart type="pie" series={[maestroCardRes.length,masterCardRes.length,visaCardRes.length]} options={{title:{text:"Type Of Credit Card Users"}, labels:["MAESTRO CARD","MASTER CARD","VISA CARD"]}} />
          </div>
          <div className="col-md-4 col-lg-4">
            <ul>
              <li className="emp-list-style">TOTAL USERS = {emplres.length}</li>
              <li className="emp-list-style">
                MAESTRO CARD USERS = {maestroCardRes.length}
              </li>
              <li className="emp-list-style">
                MASTER CARD USERS = {masterCardRes.length}
              </li>
              <li className="emp-list-style">
                VISA CARD USERS = {visaCardRes.length}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
