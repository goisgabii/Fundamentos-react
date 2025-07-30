import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import loginImage from "../../public/assets/logo.gif"

export default function Login() {
  return (
     <Flex w="100vw" h="100vh">
       <Flex w="50%" bg="#2C73EB" align="center" justify="center">

         <Image w={500} h={500} src={loginImage.src}/>
       </Flex>
       <VStack w="50%" bg={"black"}  >
          <Heading as={"h1"}>Account Login</Heading>
          <Text>If you are already a member you can login with your email address and password.</Text>
       </VStack>
     </Flex>
  )
}
