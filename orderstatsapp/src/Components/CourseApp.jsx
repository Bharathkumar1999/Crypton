import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const CourseApp = () => {

    const[data,setData]=useState([]);


    useEffect(()=>{
        
        
        fetch("https://json-mock-gxsh.onrender.com/courses")
        .then((res)=> {
            
            return res.json();
        }) 
        .then((res)=> {
            setData(res)
        })
    },[])
  return (
    <>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>
            <p style={{marginLeft:"20px",fontSize:"2xl",lineHeight: 1.2}}>My Courses</p>
            <p style={{marginRight:"20px"}}>View All</p>
        </div>
        <TableContainer>
        <Table variant='simple'>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
            <Tr>
                <Th>Course Name</Th>
                <Th>Start Date</Th>
                <Th>Lesson Completed</Th>
                <Th>Duration</Th>
            </Tr>
            </Thead>
            <Tbody>

            {data?.map((prod)=>{
               return (
                <Tr key={prod.id}>
                    <Td><div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <img src={prod.image} height={"35px"} width={"35px"} /> 
                        <div style={{display:"flex",flexDirection:"column",marginLeft:"10px"}}>
                            <div>{prod.title}</div> 
                            <div>{prod.lessons}</div>
                        </div>
                        </div></Td>
                    <Td>{prod.date}</Td>
                    <Td>{prod.completed}</Td>
                    <Td>{prod.duration}</Td>
                </Tr>
            )})}

            </Tbody>
            
        </Table>
        </TableContainer>
    </>
  )
}

export default CourseApp