import { Button, FormControl, FormLabel, Input, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

export default function Login() {
  return (
    <div>
      <Text fontSize={"3rem"}>Log In</Text>
      <FormControl>
        <FormLabel mt={2}>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl>
        <FormLabel mt={2}>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      <Wrap justify="left">
        <WrapItem>
          <Button
            mt={4}
            colorScheme='twitter'
            // isLoading={isSubmitting}
            type='submit'
          >
            Log In
          </Button>
        </WrapItem>
      </Wrap>
    </div>
  )
}
