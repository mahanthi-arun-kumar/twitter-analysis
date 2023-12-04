import { Box, Carousel, Image } from "grommet";
import React from "react";
import AppHeader from "../components/AppHeader";

const Results = () => {
  return (
    <Box height="100vh">
      <AppHeader />
      <Box flex align="center" justify="center" overflow="hidden">
        <Carousel fill>
          <Image fit="cover" src="/images/image1.jpg" />
          <Image fit="cover" src="/images/image2.jpg" />
          <Image fit="contain" src="/images/image3.jpeg" />
          <Image fit="contain" src="/images/image4.jpeg" />

        </Carousel>
      </Box>
    </Box>
  );
};

export default Results;
