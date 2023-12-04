import { signOut } from "@firebase/auth";
import { Avatar, Box, DropButton, Header, Heading, Text } from "grommet";
import { User } from "grommet-icons";
import React, { useState } from "react";
import { auth } from "../config/fireConfig";
import { useNavigate } from "react-router";

function AppHeader() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  console.log(user,error)
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      setUser(null);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <Header pad="small">
        {/* <DropButton label={<Avatar>AR</Avatar>} /> */}
        <Box direction="row" align="center">
          <Heading level="3" margin="none">
            Twitter Analysis
          </Heading>
        </Box>
        <Box direction="row" align="center">
          <DropButton
            label={
              <Box direction="row" align="center" gap="small">
                <Avatar size="medium" background="brand">
                  <User />
                </Avatar>
              </Box>
            }
            dropContent={
              <Box width="xsmall" pad="xsmall">
                <Box align="center">
                  <Text onClick={handleLogout} style={{ cursor: "pointer" }}>
                    Log out
                  </Text>
                </Box>
              </Box>
            }
            dropProps={{ align: { top: "bottom", right: "right" } }}
            plain
          />
        </Box>
      </Header>
      <Box
        width="100%"
        height="1px"
        background="rgb(117, 117, 117)"
        border={{
          color: "rgba(0, 0, 0, 0.12)",
          size: "1px",
          side: "bottom",
        }}
      />
    </>
  );
}

export default AppHeader;
