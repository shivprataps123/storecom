import { AlertDialog,
   AlertDialogBody,
    AlertDialogContent,
     AlertDialogFooter,
      AlertDialogHeader,
       AlertDialogOverlay,
        Box, 
        Button,
         Center,
          Table,
           TableCaption,
            TableContainer,
             Tbody,
              Td, Tfoot,
               Th, Thead,
                Tr, useDisclosure
               } from "@chakra-ui/react";
import { useContext,useRef } from "react";
//import { checkout } from "../Context/CartContext/action";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import { checkout,removeFromCart } from "../Context/CartContext/action";


const Cart = () => {
  const {state,dispatch}=useContext(CartContext);
  const {isOpen,onClose}=useDisclosure();
  const cancelRef=useRef();

  const handleCheckout=()=>{
    dispatch(checkout());
    onClose();
  }
  return (
    <Box>
      <TableContainer mt={{base:20,sm:"20",md:"28",lg:"32"}}>
         <Table
         variant="simple"
         colorScheme="gray"
         size={{base:"sm",sm:"sm",md:"md",lg:"lg"}}
         >
          <TableCaption>No Exchange | No Refund</TableCaption>
         <Thead>
          <Tr>
            <Th fontSize={{base:"xs",md:"md"}}>Product</Th>
            <Th fontSize={{base:"xs",md:"md"}}>Price (INR)</Th>
            <Th fontSize={{base:"xs",md:"md"}}>Remove From Cart</Th>
          </Tr>
         </Thead>
         <Tbody>
          {state.map((cartItem)=>(
            <Tr key={cartItem.id}>
              <Td fontSize={{base:"xs",md:"md"}}>{cartItem.title}</Td>
              <Td fontSize={{base:"xs",md:"md"}}>{cartItem.price}</Td>
              <Td fontSize={{base:"xs",md:"md"}}>
                <Button onClick={()=>dispatch(removeFromCart(cartItem.id))}>
                  Remove From Cart
                </Button>
              </Td>
            </Tr>
          ))}
         </Tbody>
         <Tfoot>
          <Tr>
            <Th fontSize={{base:"xs",md:"md"}}>Final Price</Th>
            <Th fontSize={{base:"xs",md:"md"}}>
              {Math.round(state.reduce((a,c)=>a+c.price,0))}
            </Th>
          </Tr>
         </Tfoot>
         </Table>
      </TableContainer>
      <Center mt={{base:4,md:8}}>
        <Button variant="outline" colorScheme="gray" onClick={isOpen}>
          Place Order
        </Button>
          <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Place Order
                </AlertDialogHeader>
                <AlertDialogBody>
                  Are you sure you want to place this order ?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={handleCheckout} ml={3}>
                    Yes
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>


      </Center>
    </Box>
  );
};

export default Cart;
