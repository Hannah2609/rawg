import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from './components/NavBar';
import './App.css'

function App() {

  return (
    <Grid templateAreas={{
      base: `"header" "main"`,
      lg: `"header header" "aside main"`
    }}>
      <GridItem pl="2" area={"header"}>
        <NavBar /> 
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" bg="pink.300" area={"aside"}>
          aside
        </GridItem>
      </Show>
      <GridItem>
        <GameGrid />
      </GridItem>
    </Grid>  
  )
}

export default App
