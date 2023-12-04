import { Box, Carousel, Image } from "grommet";
import React from "react";
import AppHeader from "../components/AppHeader";

const Results = () => {
  return (
    <Box>
      <AppHeader />
      <Box align="center" justify="center" overflow="hidden">
        <Carousel fill>
          <Image fit="cover" src="/images/image1.jpg" />
          <Image fit="cover" src="/images/image2.jpg" />
        </Carousel>
      </Box>
    </Box>
  );
};

export default Results;
