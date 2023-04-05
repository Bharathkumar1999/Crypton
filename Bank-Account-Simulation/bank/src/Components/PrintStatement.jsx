import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
    useToast,
    VStack,
  } from "@chakra-ui/react";
 

const PrintStatement = () => {
    const[loading, setLoading]= useState(false);
    const navigate = useNavigate();
    const[error,setError]= useState(false);
    const[products,setproducts]= useState("");
    
    
    const [name,setName]= useState("");
    const [gender,setGender]= useState("");
    const [dob,setDob]= useState("");
    const [email,setEmail]= useState("");
    const [mobile,setMobile]= useState("");
    const [address,setAddress]= useState("");
    const [initBal,setInitBal]= useState("");
    const [adhar,setAdhar]= useState("");
    const [panNo,setPanNo]= useState("");
    
    const [status,setStatus]= useState("Active");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    

    const getData=()=>{
      setLoading(true)
        fetch('https://json-mock-gxsh.onrender.com/account',{
          headers: {
            'Content-Type': 'application/json',
            
        }
        })
        .then((res)=> res.json())
        .then((res)=> {
            console.log(res)
            setproducts(res)
            setLoading(false)
        }) 
        .catch((err)=> {
            console.log(err)
            setError(true)
            setLoading(false)

        })
  }

    useEffect(()=>{
      getData()
        
    },[])

    const handleDelete=(id) =>{
      setLoading(true)
      deleteproduct(id)
      .then(res=>{
          getData()
      })
      .catch(err=>{
          setLoading(false)
      })

  }

    const deleteproduct=(productID)=>{
        return fetch(`https://json-mock-gxsh.onrender.com/account/${productID}`,{
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
          }
        })
        .then(res=>res.json())
    }

    const handleEdit=(id)=>{
        const payload={
            name,
            dob,
            email,
            mobile,
            adhar,
            panNo
        }

        fetch(`https://json-mock-gxsh.onrender.com/account/${id}`,{
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            }

        })
        .then((res)=> res.json())
        .then((res)=>{
            console.log(res.msg)
            alert("updated successfully")
            window.location.reload();
        } )
        
        .catch((err)=> console.log(err))

        onClose();

       
    }


    const handleLogout=()=>{
        localStorage.setItem("token","")
        navigate("/close")
      }
    
  return (
    <div>
        <Heading>Bank Account Simulation</Heading>
        <div>
            <Button onClick={handleLogout}>Close Account</Button>
        </div>

        <h1>Accounts</h1>
        
        
        {
            loading && "loading..."
        }
        {
            error && "something went wrong..."
        }
       
                        <Container maxW={{base:"full", md:"container.xl"}} p={{base:2,lg:0}}>
                    <Grid templateColumns={{base:"repeat(1, 1fr)",md:"repeat(1, 1fr)",lg:"repeat(2, 1fr)"}} width='80%' margin="auto"gap="20px"marginTop="20px"  w='full'>
                        {
                        products && products.length>0 && products.map((product)=>(
                            <GridItem key={product.id}>
                            <Box
                            bg='gray.50'
                            columns={{ sm: 2, md: 4 }}
                            spacing='8'
                            p='2'
                            textAlign='center'
                            rounded='lg'
                            // color='gray.600'
                            mt={4}
                            >
                                <VStack>
                               
                                <Box>
                                <Text>ID:{product.id}</Text>
                                </Box>
                                <Box>
                                <Text>Name: {product.name}</Text>
                                </Box>
                                <Box>
                                <Text>Gender: {product.gender}</Text>
                                </Box>
                                <Box>
                                <Text>DOB: {product.dob}</Text>
                                </Box>
                                <Box>
                                <Text>Mobile: {product.mobile}</Text>
                                </Box>
                                <Box>
                                <Text>Address: {product.address}</Text>
                                </Box>
                                <Box>
                                <Text>Init Balance: {product.initBal}</Text>
                                </Box>
                                <Box>
                                <Text>Pan No: {product.panNo}</Text>
                                </Box>
                                <Box>
                                <Text>Adhar: {product.adhar}</Text>
                                </Box>
                                <Flex
                                    justifyContent={"center"}
                                    align="center"
                                    w="full"
                                    fontSize={"20px"}
                                    mt="4px"
                                    px="2px"
                                    // ml="10px"
                                >
                                    <Button m={1} onClick={()=> handleDelete(product.id)}>Delete</Button>
                                    <Button m={1} onClick={onOpen}>Edit</Button> 
                                    
                                </Flex> 

                                <Modal isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                    <ModalHeader>UpdateKYC</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <FormControl>
                                        <FormLabel>Name</FormLabel>
                                        <Input
                                            type="text"
                                            name="product_name"
                                            onChange={(e)=>setName(e.target.value)}
                                            placeholder={name}
                                        />
                                        <FormLabel>Dob</FormLabel>
                                        <Input
                                            type="text"
                                            name="Dob"
                                            onChange={(e)=>setDob(e.target.value)}
                                            placeholder={dob}
                                        />
                                        <FormLabel>Email</FormLabel>
                                        <Input
                                            type="text"
                                            name="email"
                                            onChange={(e)=>setEmail(e.target.value)}
                                            placeholder={email}
                                        />
                                        <FormLabel>Mobile</FormLabel>
                                        <Input
                                            type="text"
                                            name="mobile"
                                            onChange={(e)=>setMobile(e.target.value)}
                                            placeholder={mobile}
                                        />
                                        <FormLabel>Pan No</FormLabel>
                                        <Input
                                            type="text"
                                            name="panNo"
                                            onChange={(e)=>setPanNo(e.target.value)}
                                            placeholder={panNo}
                                        />
                                        <FormLabel>Adhar No</FormLabel>
                                        <Input
                                            type="text"
                                            name="adhar"
                                            onChange={(e)=>setAdhar(e.target.value)}
                                            placeholder={adhar}
                                        />
                                        </FormControl>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme={"green"} onClick={()=> handleEdit(product.id)}>
                                        Update
                                        </Button>
                                    </ModalFooter>
                                    </ModalContent>
                                </Modal>
                                <Divider />
                                
                                </VStack>
                            </Box>
                            
                            
                        </GridItem>

                        ))
                        }
                    </Grid>
                </Container>
       
       
                        
        
       

    </div>
    
  )
}

export default PrintStatement