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

const PokemonCard = ({ pokemonName, add, remove, onTeam, count }) => {

  ////////////////// COMPONENT STATES ///////////////////////////////////

  const [loaded, setLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [favorited, setFavorited] = useState(onTeam);


  ////////////////// CARD STATES ////////////////////////////////////////

  const [moves, setMoves] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [types, setTypes] = useState([]);
  const [description, setDescription] = useState([]);


  ////////////////// HELPER FUNCTIONS ////////////////////////////////////

  const changeSelection = () => {
    if (count < 3) {
      setFavorited(!favorited)
    }
    if (favorited) {
      remove(pokemonName);
    } else {
      add(pokemonName);
    }
  };

  ////////////////// AXIOS CALL ///////////////////////////////////////////

  useEffect(() => {
    getDetails();
  })

  const getDetails = async () => {
    if (!loaded) {
      await axios.get(baseUrl + "pokemon/" + pokemonName.toLowerCase())
        .then(response => {
          setMoves(response.data['moves'].slice(0, 5));
          setAbilities(response.data['abilities']);
          setTypes(response.data['types'])
        })
        .catch((error) => {
          console.log(error);
        })

      await axios.get(baseUrl + "pokemon-species/" + pokemonName.toLowerCase())
        .then(response => {
          setDescription(response.data['flavor_text_entries'].slice(0, 1));
        })
        .catch((error) => {
          console.log(error);
        })
      setLoaded(true);
    }
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
        title={pokemonName}

      />

      {/* ///////////////// IMAGES ////////////////// */}
      <CardMedia
        component="img"
        height="150"
        width="150"
        image={"./images/" + pokemonName + ".png"}
        style={{ backgroundColor: "#92B181" }}
        sx={{ padding: "1em 1em 1em 1em", objectFit: "contain" }}
        alt={pokemonName}
      />

      {/* ///////////////// TYPE INFO ////////////////// */}
      <CardContent>
        {types.map((t) =>
          <img
            src={"./images/types/" + t['type']['name'].toUpperCase() + ".png"}
            height="25"
          />
        )}
      </CardContent>

      {/* ///////////////// BUTTONS ////////////////// */}
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={changeSelection}
        >
          {favorited ? (
            <FavoriteIcon
              style={{ color: "#C6878F" }} />
          ) : (
            <FavoriteBorder />
          )}
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
            {description.map(
              (m) => m['flavor_text'].replace(/^[\w.-]$/g, " "))}

          </Typography>
          <Typography paragraph>
            MOVES: <br></br>
            {moves.map((m) =>
              <div>
                {m['move']['name'].charAt(0).toUpperCase() +
                  m['move']['name'].slice(1)}
              </div>
            )}
          </Typography>
          <Typography paragraph>
            ABILITIES: <br></br>
            {abilities.map((a) =>
              <div>
                {a['ability']['name'].charAt(0).toUpperCase() +
                  a['ability']['name'].slice(1)}
              </div>
            )}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )

}
export default PokemonCard;