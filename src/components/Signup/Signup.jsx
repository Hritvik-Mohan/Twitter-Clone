import React, { useState } from "react";
import { account } from "../../appwrite/appwriteConfig";
import { Form, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Signup
  const signupUser = async (e) => {
    e.preventDefault();

    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name
    );

    promise.then(
      function (response) {
        console.log(response);
        navigate("/profile"); //success
      },
      function (error) {
        console.log(error); //Failure
      }
    );
  };

  return (
    <div>
      <Text fontSize={"3rem"}>Sign Up</Text>
      <FormControl>
        <FormLabel mt={2}>First Name</FormLabel>
        <Input type="name" />
      </FormControl>
      <FormControl>
        <FormLabel mt={2}>Last Name</FormLabel>
        <Input type="name" />
      </FormControl>
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
            Submit
          </Button>
        </WrapItem>
      </Wrap>
    </div>
  );
}
