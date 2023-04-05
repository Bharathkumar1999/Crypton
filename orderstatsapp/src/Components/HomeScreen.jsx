import React from 'react'
import {
    Tag,
    TagLabel,
    HStack,
    Heading,
    Text,
    Button,
  } from '@chakra-ui/react'

  import { TbHash } from 'react-icons/tb';

 

const HomeScreen = () => {
  return (
    <>
        <nav style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",lineHeight:"normal"}}>
            <img height={'50px'} width={'50px'} src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1LeRbudp9pFKLBT1bfkMoryMSopJVWV0Qwm2h3S-anqPYNLMG" />
            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <img height={'50px'} width={'50px'} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwFuFIf0j4aRerFeFLERah0nsHMkYOMwRd0WRCAxbfRDZnmYeE" />
                <img height={'50px'} width={'50px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2fzD7NiaYGLfZJBo1EPbPivysQZ1U1dBaqdsKLP03t0j1xlKj" />
            </div>
        </nav>

        <div>
          <HStack spacing={4} m={4}>
          {['lg'].map((size) => (
              <Tag
              size={size}
              key={size}
              borderRadius='full'
              variant='solid'
              colorScheme='blue'
              >
              <TbHash />
              <TagLabel>Top</TagLabel>
              
              </Tag>
          ))}
          </HStack>

          <Heading as='h1' size='xl' display={'flex'} justifyContent={'center'} alignItems={'center'} w='100%' >
              A Responsibly As Teach Leading, Global Company
          </Heading>
          <Text mt={5} mb={5} fontSize='xl'>Creating Superior Products & Services</Text>

          <div style={{display:"flex",flexDirection:"row",justifyContent:"center",lineHeight:"normal"}}>
            <img height={"50px"} width={'50px'} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTvduGudZgyFO_Bu1XHGt1vcYZxmUIQxyYLxgUyfoEp1sU2iVrY" />
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:'flex-start',marginLeft:"5px",lineHeight:"normal"}}>
              <Text fontSize='xl'>Trust Pilot</Text>
              <Text fontSize='xl'>Rated Best 12.6K Reviews </Text>
            </div>
          </div>

          <div style={{display:"flex",justifyContent:"center", alignItem:'center',lineHeight:"normal",marginTop:'15px'}}>
            <img height={'300px'} width={'300px'} src="https://img.freepik.com/free-vector/liquid-design-background_23-2148476932.jpg?size=626&ext=jpg" alt="" />
          </div>

          <div style={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:'center',margin:"10px"}}>
          
          <Button
            size='md'
            height='48px'
            width='200px'
            border='2px'
            borderColor='black.500'
          >
            Signup to Get 50% OFF
          </Button>

         
          <Button
            size='md'
            height='48px'
            width='200px'
            border='2px'
            borderColor='green.500'
            marginTop='10px'
            colorScheme='teal' 
            variant='solid'
          >
            Explore New Products
          </Button>
          </div>


        
        </div>

        

    </>
  )
}

export default HomeScreen