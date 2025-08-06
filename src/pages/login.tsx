import {Button, Link as ChakraLink, Flex, Heading, HStack, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
<Image w={500} h={500} src="/assets/logo.gif" alt="Login image" />



import { Checkbox} from "@/components/ui/checkbox";




export default function Login() {
    return (
        <Flex w="100vw" h="100vh">
          <Flex w="50%" bg="#2C73EB" align="center" justify="center">
            <Image w={500} h={500} src="/assets/logo.gif" alt="Login image" />
          </Flex>

          <VStack w="50%" bg="green.400" justify="center">
            <Stack>
              <Heading as="h1">Login</Heading> 

              <Text>Se você já é membro, você pode fazer login com seu endereço de e-mail e senha.</Text>

              <Input />
              <Input />

              <Checkbox>
                Lembre-me
              </Checkbox>

              <Button>Entrar</Button>

              <HStack>
                <Text>Não possui uma conta?</Text>
                <ChakraLink asChild>
                  <NextLink href="/sign-up">Cadastre-se</NextLink>
                </ChakraLink>

              </HStack>


            </Stack>
          </VStack>
        </Flex>
    )
}