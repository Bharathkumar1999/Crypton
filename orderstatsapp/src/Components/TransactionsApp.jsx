import { Avatar, Box, Card, CardHeader, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "./WidgetOrderStats.css";
import { useState } from 'react';

const TransactionsApp = () => {

    const[data,setData]=useState([]);


    useEffect(()=>{
        
        
        fetch("https://json-mock-gxsh.onrender.com/transactions")
        .then((res)=> {
            
            return res.json();
        }) 
        .then((res)=> {
            setData(res)
        })
    },[])

  return (
    <>

<div>
           
           <div className='holder2'>
               
               
               {data?.map((prod)=>(
                   <div key={prod.id} style={{display:"flex",flexDirection:"row",alignItems:"center",border:"1px solid #cecece",justifyContent:'space-between',boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:"5%",width:"100%"}}>
                       <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between', alignItems:'center',padding: '4%' }}>
                       <Avatar name='Dan Abrahmov' src={prod.image} pr={1} />
                          
                           <div style={{display:'flex',flexDirection:"column",alignItems:'flex-start',marginLeft:'6px'}}>
                                <b>{prod.name}</b>
                                <p>{prod.date}</p>
                           </div>
                       </div>
                       <div style={{display:'flex',flexDirection:"column",alignItems:'flex-start',justifyContent:'space-between', alignItems:"center", paddingRight: '3%' }}>
                          <p style={{color:prod.color}}>{prod.price}</p>
                          <p>{prod.status}</p>
                       </div>
                   </div>
               ))}
   
           </div>
           
       </div>
       

    </>
  )
}

export default TransactionsApp