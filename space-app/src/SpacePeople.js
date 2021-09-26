import React, { useState, useEffect } from 'react';
import './spapep.css';
import Particles from 'react-particles-js';

const SpacePeople = () =>{ 

    const [data, setData] = useState([])

    const fetchApidata = async() =>{
        const api = await fetch('http://api.open-notify.org/astros.json')
        const apiData = await api.json();
        console.log(apiData);
        setData(apiData);
    }

    useEffect(() =>{
        fetchApidata();
        
       
    },[]);
    

    return (
        <>
        <div className="mainspace">
        <h1> <span className="blink">🔴 </span>Introducing you the people who are currently there in Space </h1>
       
    
        </div>
        <Particles className="particle"
    params={{
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 4
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
        
        {
            (typeof data.people != "undefined") ?(
                <div className="mainspacecon">
            <h3>  {data.people.map((elem)=>{
                    return(
                        <>
                        
                        
                            <h4> {elem.name}  <span> Craft Name : {elem.craft} </span> </h4>
                           
                    
                        </>
                        
                    )

                })} </h3>
                </div>
            )
                : ('')
            }
        </>
    )
}

export default SpacePeople;