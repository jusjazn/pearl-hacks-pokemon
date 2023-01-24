import React, { useState, useEffect } from "react";
import axios from 'axios';

// Material UI
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const baseUrl = "https://pokeapi.co/api/v2/"

// TODO: pass card props
const PokemonCard = ({ }) => {

  ////////////////// COMPONENT STATES ///////////////////////////////////

  const [loaded, setLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [favorited, setFavorited] = useState(false);

  ////////////////// CARD STATES ////////////////////////////////////////

  const [moves, setMoves] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [types, setTypes] = useState([]);
  const [description, setDescription] = useState([]);


  ////////////////// HELPER FUNCTIONS ////////////////////////////////////

  const changeSelection = () => {
    // TODO: change card's status
  };

  ////////////////// AXIOS CALL ///////////////////////////////////////////

  useEffect(() => {
    getDetails();
  })

  const getDetails = async () => {
    // TODO: use axios to make API call
  }


  ////////////////// MATERIAL UI CARD FUNCTIONS /////////////////////////////

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


  ////////////////// DISPLAY /////////////////////////////////////////////////

  return (
    <Card sx={{ width: 250 }}
      style={{ backgroundColor: "#bad1cd" }}>
      <CardHeader
      // TODO: set title

      />

      {/* ///////////////// IMAGES ////////////////// */}
      <CardMedia
        component="img"
        height="150"
        width="150"
        style={{ backgroundColor: "#92B181" }}
        sx={{ padding: "1em 1em 1em 1em", objectFit: "contain" }}

      // TODO: set correct pokemon image
      />

      {/* ///////////////// TYPE INFO ////////////////// */}

      <CardContent>

        {/* TODO: get types and display their respective images */}

      </CardContent>

      {/* ///////////////// BUTTONS ////////////////// */}

      <CardActions disableSpacing>

        {/* TODO: add button functionality, change button based on status  */}
        <IconButton
          aria-label="add to favorites"
        >
          <FavoriteBorder />
        </IconButton>



        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>

        {/* ///////////////// MORE DETAILS ////////////////// */}

        <CardContent>
          <Typography paragraph>

            DESCRIPTION: <br></br>

            {/* TODO: insert description of pokemon */}

          </Typography>

          <Typography paragraph>

            MOVES: <br></br>

            {/* TODO: insert moves of pokemon */}
            
          </Typography>

          <Typography paragraph>

            ABILITIES: <br></br>

            {/* TODO: insert abilities of pokemon */}

          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  )

}
export default PokemonCard;