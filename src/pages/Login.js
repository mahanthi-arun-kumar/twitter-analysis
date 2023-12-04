import React, { useState } from "react";
import { Box, Button, Form, FormField, Text, TextInput } from "grommet";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../config/fireConfig";
import { FormOverallAlert } from "../components/FormOverAllAlert";
import { useNavigate } from "react-router";
import { Hide, View } from "grommet-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [passwordReveal, setPasswordReveal] = useState(false);

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setError("");
      setUser(response.user);
      navigate("/results");
    } catch (err) {
      setError("Invalid Credentials");
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
          <Text size="xxlarge">Login</Text>
        </Box>
        <Form onSubmit={handleLogin}>
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
                onChange={onPasswordChange}
                type={passwordReveal ? "text" : "password"}
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
          <Button type="submit" primary label="Login" />
        </Form>
        <Box direction="row" justify="between" align="center">
          <Text size="small">Don't have an account</Text>
          <Button
            label="Sign Up Here"
            size="small"
            onClick={() => {
              navigate("/signup");
            }}
          />
        </Box>
        {error && <FormOverallAlert message={error} />}
      </Box>
    </Box>
  );
};

export default Login;
