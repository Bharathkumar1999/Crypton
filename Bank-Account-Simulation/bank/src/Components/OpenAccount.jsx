import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const OpenAccount = () => {
    const [name,setName]= useState("");
    const [gender,setGender]= useState("");
    const [dob,setDob]= useState("");
    const [email,setEmail]= useState("");
    const [mobile,setMobile]= useState("");
    const [address,setAddress]= useState("");
    const [initBal,setInitBal]= useState("");
    const [adhar,setAdhar]= useState("");
    const [panNo,setPanNo]= useState("");
    

    const handleSubmit=()=>{
        const payload={
            name,
            gender,
            dob,
            email,
            mobile,
            address,
            initBal,
            panNo,
            adhar
        }

        fetch("https://json-mock-gxsh.onrender.com/account",{
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                // "Authorization": `Bearer ${localStorage.getItem("token")}`
            }

        })
        .then((res)=> res.json())
        .then((res)=> console.log(res.msg))
        .catch((err)=> console.log(err))
        console.log(payload)
    }
  return (
    <div>
        <Box 
        
        pt={{ lg: "50px", base: "10px" }}
      align={"center"}
      w="100%"
      h="100vh"
 
      gap="20px"
      flexDir="column"
        
        mb="10px">
            <VStack
            
            w={["full", "400px", "450px"]}
            border={"1px solid #dedede"}
            p="20px"
            gap="10px"
            borderRadius={"md"}
            bg="white"
          >
            <Heading>Open Account</Heading>
            <Input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
            <Input type="text" placeholder='gender' value={gender} onChange={(e)=>setGender(e.target.value)} />
            <Input type="text" placeholder='dob' value={dob} onChange={(e)=>setDob(e.target.value)} />
            <Input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <Input type="text" placeholder='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} />
            <Input type="text" placeholder='address' value={address} onChange={(e)=>setAddress(e.target.value)} />
            <Input type="text" placeholder='Initial Balance' value={initBal} onChange={(e)=>setInitBal(e.target.value)} />
            <Input type="text" placeholder='adharNo' value={adhar} onChange={(e)=>setAdhar(e.target.value)} />
            <Input type="text" placeholder='panNo' value={panNo} onChange={(e)=>setPanNo(e.target.value)} />
            

            
            <Button onClick={handleSubmit}>Submit</Button>
            

            </VStack>
            
        </Box>
    </div>
  )
}

export default OpenAccount