import {
  Box,
  ChakraProvider,
  Grid,
  theme,
  Flex,
  Button,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { TicTacBox } from './TicTacBox';
import { PlayNumberBox } from './PlayNumberBox';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid
          w="100vw"
          h="100vh"
          p={3}
          alignContent="center"
          justifyContent="center"
          justifyItems="center"
          gap={8}
        >
          <ColorModeSwitcher position="absolute" top={2} right={2} />
          <Heading as="h3" fontSize="lg">
            El turno es de <TicTacBox state="o" />, El ganador es ??, El juego
            ha terminado
          </Heading>
          <Box maxW={160}>
            <Grid gap={2} templateColumns="repeat(3, 1fr)">
              <TicTacBox state="o" />
              <TicTacBox state="x" />
              <TicTacBox />

              <TicTacBox />
              <TicTacBox />
              <TicTacBox />

              <TicTacBox />
              <TicTacBox />
              <TicTacBox />
            </Grid>
          </Box>

          <Flex gap={2}>
            <PlayNumberBox>1</PlayNumberBox>
            <PlayNumberBox>2</PlayNumberBox>
            <PlayNumberBox>3</PlayNumberBox>
            <PlayNumberBox>4</PlayNumberBox>
            <PlayNumberBox isSelected>5</PlayNumberBox>
            <PlayNumberBox>6</PlayNumberBox>
            <PlayNumberBox>7</PlayNumberBox>
            <PlayNumberBox>8</PlayNumberBox>
            <PlayNumberBox>9</PlayNumberBox>
          </Flex>

          <Button colorScheme="purple">Reiniciar</Button>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
