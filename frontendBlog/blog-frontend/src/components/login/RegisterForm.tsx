import { Box, Flex, Heading, Text, Input, VStack, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

interface ILoginForm {
    email: string;
    pass: string;
    submitLogin: () => Promise<void>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPass: React.Dispatch<React.SetStateAction<string>>;
}

const LoginForm = ({
    email,
    pass,
    submitLogin,
    setEmail,
    setPass,
  }: ILoginForm) => {
    return (
    <Flex justifyContent={'center'} alignItems={'center'} height='100vh'>
        <VStack spacing={'2rem'}>
            <Heading>Login</Heading>
            <VStack spacing={'1rem'} width='20rem'>
                <Box width={'100%'}>
                    <Text>email:</Text>
                    <Input 
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                </Box>
                <Box width={'100%'}>
                    <Text>Password:</Text>
                    <Input
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    type='password'
                    />
                </Box>
            </VStack>
            <Button onClick={submitLogin}>Login</Button>
        </VStack>

    </Flex>
  )
}

export default LoginForm