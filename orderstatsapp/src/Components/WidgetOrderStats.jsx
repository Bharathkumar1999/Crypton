import React, { useState } from 'react'
import { useEffect } from 'react';
import "./WidgetOrderStats.css";




const WidgetOrderStats = () => {

    const[data,setData]=useState([]);


    useEffect(()=>{
        
        
        fetch("https://json-mock-gxsh.onrender.com/items")
        .then((res)=> {
            
            return res.json();
        }) 
        .then((res)=> {
            setData(res)
        })
    },[])

    

  return (
        <div>
           
        <div className='holder'>
            
            
            {data?.map((prod)=>(
                <div key={prod.id} style={{display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid #cecece",padding:"10px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:"5%",paddingBottom:"7%"}}>
                    <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between', alignItems:'center' }}>
                        <p>{prod.title}</p>
                        <p style={{paddingLeft:"50px",color:prod.color}}>{prod.percentage}%</p>
                    </div>
                    <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between', alignItems:"center" }}>
                        <img src={prod.image} alt="prod-img" height={50} width={50} />
                        <b style={{paddingLeft:"25px",lineHeight: "200%"}}>{prod.count}</b>
                    </div>
                </div>
            ))}

        </div>
        
    </div>
  )
}

export default WidgetOrderStats


