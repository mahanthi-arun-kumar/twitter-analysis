import React, { useState } from "react";
import { Box, Button, Form, FormField, Text, TextInput } from "grommet";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../config/fireConfig";
import { FormOverallAlert } from "../components/FormOverAllAlert";
import { useNavigate } from "react-router";
import { Hide, View } from "grommet-icons";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordReveal, setPasswordReveal] = useState(false);
  const [reenterPasswordReveal, setReenterPasswordReveal] = useState(false);
  const navigate = useNavigate();
  console.log(user)
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onReenterPasswordChange = (event) => {
    setReenterPassword(event.target.value);
  };
  const handleSignup = async () => {
    try {
      if (password === reenterPassword) {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(response.user);
        navigate("/");
        setErrorMessage("");
      } else {
        setErrorMessage("passwords didn't match");
      }
    } catch (err) {
      setErrorMessage(err.message);
      setUser(null);
    }
  };
  return (
    <Box
      align="center"
      justify="center"
      height="100vh"
      style={{ background: "rgba(47,100,90,1)" }}
    >
      <Box
        width="medium"
        pad={{ vertical: "20px", horizontal: "12px" }}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <Box align="center" justify="center">
          <Text size="xxlarge">Sign Up</Text>
        </Box>
        <Form onSubmit={handleSignup}>
          <FormField htmlFor="text-email" label="Email">
            <TextInput
              id="text-email"
              placeholder="enter email"
              value={email}
              onChange={onEmailChange}
            ></TextInput>
          </FormField>
          <FormField htmlFor="text-password" label="Password">
            <Box
              // width="medium"
              direction="row"
              // margin="large"
              align="center"
              //round="small"
              //border
            >
              <TextInput
                plain
                id="text-password"
                placeholder="enter password"
                value={password}
                type={passwordReveal ? "text" : "password"}
                onChange={onPasswordChange}
              ></TextInput>
              <Button
                icon={
                  passwordReveal ? (
                    <View size="medium" />
                  ) : (
                    <Hide size="medium" />
                  )
                }
                onClick={() => setPasswordReveal(!passwordReveal)}
              />
            </Box>
          </FormField>
          <FormField htmlFor="text-reenter-password" label="Re-Enter Password">
            <Box
              // width="medium"
              direction="row"
              // margin="large"
              align="center"
              //round="small"
              //border
            >
              <TextInput
                plain
                type={reenterPasswordReveal ? "text" : "password"}
                id="text-reenter-password"
                placeholder="re-enter password"
                value={reenterPassword}
                onChange={onReenterPasswordChange}
              ></TextInput>
              <Button
                icon={
                  reenterPasswordReveal ? (
                    <View size="medium" />
                  ) : (
                    <Hide size="medium" />
                  )
                }
                onClick={() => setReenterPasswordReveal(!reenterPasswordReveal)}
              />
            </Box>
          </FormField>
          <Button type="submit" primary label="SignUp" />
          <Box direction="row" justify="between" align="center">
            <Text size="small">Already have an account</Text>
            <Button
              label="Log in Here"
              size="small"
              onClick={() => {
                navigate("/");
              }}
            />
          </Box>
          {errorMessage && <FormOverallAlert message={errorMessage} />}
        </Form>
      </Box>
    </Box>
  );
};

export default SignUp;
