import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import {Flex,Box,Text,Spacer,HStack,Divider} from '@chakra-ui/react'
// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
const Navbar = () => {
  const {state}=useContext(AuthContext);
  return (
  <>
  
      <Flex
        minWidth="full"
        alignItems="center"
        gap="2"
        py={2}
        px={6}
        bg="gray.50"
        color="gray.600"
        >
          <Box p="2">
            {state.token && (
              <Text fontWeight={600} fontSize={{base:"xs",md:"md"}}>Token:{state.token}</Text>
            )}

          </Box>
          <Spacer/>
          <HStack>
            <Link to='/'>
              <Text fontSize={{base:"xs",md:"md"}}>HOME</Text>
              </Link>
              <Link to='/login'>
              <Text fontSize={{base:"xs",md:"md"}}>LOGIN</Text>
              </Link>
              <Link to='/cart'>
              <Text fontSize={{base:"xs",md:"md"}}>CART</Text>
              </Link>
          </HStack>
        </Flex>
        <Divider/>
  
  </>
  )
};

export default Navbar;
