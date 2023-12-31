import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { BsImageFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ImageView from './ImageView';
import {  PropertyContext } from '../Add_property/ContextProvider';


const PropertyList = () => {
    
    let token = localStorage.getItem("token");
    let id = localStorage.getItem(("userID"));
    const navigate = useNavigate();
    const [pathFlag, setPathFlag] = useState(false);
    const [path, setPath] = useState("");
    const [data, setData] = useState([]);
    const [change, setChange] = useState(true);
    const {SetnewData,SetIsEdit} = useContext(PropertyContext);


    function showImage(data) {
        setPath(`https://real-state-backend-6416.onrender.com/${data.image}`);
        setPathFlag(true);
        // console.log(path);
        console.log(data.image);
    }

    let url = "http://localhost:8000/realEstate/getData";
    useEffect(() => {
        // let token = localStorage.getItem("token");
        console.log(token);
        fetch(url, {
            method: "GET",
            headers: {
                'Authorization': token,
                'Content-Type': 'multipart/form-data'
            },
        })
            .then((res) => {
                // console.log(res)
                if (res.statusText === "Forbidden") {
                    alert("Session over");
                    navigate('/');
                } else {
                    res.json().then((result) => {
                        console.log(result.data,"resultData");
                        
                        setData(result.data);
                    });
                }
            })
            .catch((err) => navigate("/"));
    }, [ token, url, change, navigate]);


    // axios.get('/realEstate/getData', async(req, res)=>{
    //     try{
    //      const allDetails =await propertyDetailsModel.find()
    //      console.log(allDetails)
    //     }
    //     catch(err){
    //      res.send("error found")
    //     }
    //  })
     const getAllNodes = () => {
        axios
          .get(`http://localhost:8000/realEstate/getData`)
          .then((response) => {
            console.log(response)
            setData(response.data);
          })
          .catch((error) => {
            // error;
          });
      };
    useEffect(()=>{
        getAllNodes();
    },[])
    
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
      };

    function update(details) {
        console.log(details._id);
        let data = { status: "Sold" };

        axios
            .patch(
                `https://real-state-backend-6416.onrender.com/prop/v1/sold/${details._id}`,
                data,
                {
                    headers: {
                        'Authorization' : token
                    },
                }
            )
            .then((res) => {
                // console.log(res.data);
                setChange(!change);
            })
            .catch((error) => alert("Unable to sell"));

            
    }
    console.log("dataset",data)
    return (
        <>
        
            {data?.length === 0 ? (
                <>
                    <h1 style={{ marginTop: "40px", marginLeft:"30%" }}>No Property Found</h1>
                </>
            ) : (
                <> 
                    <table
                        className='table table-hover table-responsive-xl'
                        style={{ marginTop: "15px" }}
                    >
                        <thead style={{ color: "#4C57B6" }}>
                            <tr>
                                <th scope="col">PPD ID</th>
                                <th scope="col">Image</th>
                                <th scope="col">Property</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Area</th>
                                <th scope="col">Views</th>
                                <th scope="col">Status</th>
                                <th scope="col">Days Left</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((properties) => {
                                return (
                                    <tr onClick={handleIncrement} key={properties.ppdid}>
                                        <th scope='row'>{properties._id}</th>
                                        <th scope='col' onClick={()=>showImage(properties)}>
                                            <BsImageFill />
                                        </th>
                                        <th scope="col">{properties.property_type}</th>
                                        <th scope="col">{properties.mobile}</th>
                                        <th scope="col">{properties.area}</th>
                                        <th scope="col">{count}</th>
                                        <th  scope="col">{properties.proStatus}</th>
                                        {/* <th onClick={() =>update(properties)} scope='col'>
                                            <button style={{ backgroundColor: "#F5FAF5", color: "#416899", borderRadius: "5px", border: "1px solid rgb(228 233 233)" }} className="soldbtn">{properties.status}</button>
                                        </th> */}
                                        <th style={{}} scope='col'>{properties.daysleft}</th>
                                        <th scope="col"
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-evenly",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <span
                                                onClick={() => { 
                                                    navigate("/propertyView", {state: properties});
                                                }}
                                            >
                                                <BsFillEyeFill />
                                            </span>
                                            <span
                                                onClick={() => {
                                                    // Edit Property
                                                    localStorage.setItem("ppd_id",properties.ppdid);
                                                    localStorage.setItem("PropertyData",properties.data);
                                                   
                                                    navigate("/editproperty" , { state: properties});
                                                    SetIsEdit(true);
                                                    // console.log(properties)
                                                    SetnewData(properties);
                                                    // console.log()
                                                }}
                                            >
                                                <MdModeEditOutline />
                                            </span>
                                        </th>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {
                        pathFlag && (
                            <div
                                style={{
                                    width: "50%",
                                    height: "40%",
                                    minHeight: "40%",
                                    position: "absolute",
                                    top: "25%",
                                    left: "25%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                                onClick={() => setPathFlag(false)}
                            >

                                <ImageView path={path}/>
                            </div>
                        )}
                </>
            )}
        </>
    );
}

export default PropertyList;