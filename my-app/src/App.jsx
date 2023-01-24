import PokemonCard from "./Card.jsx";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import BlankCard from "./BlankCard";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 400;

function App() {

  ////////////////// BOARD STATES ///////////////////////////////////

  const [team, setTeam] = useState([]);
  const [catalog, setCatalog] = useState([
    "Bulbasaur",
    "Charmander",
    "Chikorita",
    "Cyndaquil",
    "Ditto",
    "Eevee",
    "Gengar",
    "Pikachu",
    "Ralts",
    "Squirtle"
  ])

  ////////////////// ADD & REMOVE FUNCTIONS ///////////////////////////////////
  
  const addToTeam = (name) => {
    // TODO: add pokemon to the team, remove it back to catalog
    // any edge cases to consider?

  }

  const removeFromTeam = (name) => {
    // TODO: remove pokemon from the team, add it back to catalog

  };

  ////////////////// HELPER FUNCTION ///////////////////////////////////

  const createTemplateCards = () => {
    let content = [];
    for (let i = 0; i < 3 - team.length; i++) {
      content.push(
        <Grid item>
          <BlankCard key={i} />
        </Grid>
      )
    }
    console.log(team.length)
    return content;
  }

  ////////////////// DISPLAY //////////////////////////////////////////

  return (
  
      <Box sx={{ display: 'flex', bgcolor: "#253d5b" }}>
        <CssBaseline />

        {/* ///////////////// TOOL BAR HEADER ////////////////// */}
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
        >
          <Toolbar sx={{ backgroundColor: "#B79D94", height: 75 }}>
            <Typography variant="h4" noWrap component="div">
              Available Pokemon
            </Typography>
          </Toolbar>
        </AppBar>

        {/* ///////////////// MAIN GRID ////////////////// */}
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: '#253d5b', p: 3 }}
        >
          <Toolbar />
          <Grid container spacing={2} padding={2} justifyContent="center">

            {/* TODO: insert pokemon catalog */}

          </Grid>
        </Box>


        {/* ///////////////// SIDE DRAWER ////////////////// */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              bgcolor: "#C6878F"
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <Toolbar />
          <Grid container padding={5} spacing={5} justifyContent="center"
            sx={{
              backgroundColor: "#C6878F",
              borderRadius: 3
            }}
          >
            <h1>Your Team</h1>

            {/* TODO: insert team pokemon */}

            {createTemplateCards()}

          </Grid>
        </Drawer>
      </Box>
  );
}

export default App;
