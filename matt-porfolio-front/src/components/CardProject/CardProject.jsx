import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function CardProject() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex",  }}>
      <CardMedia
        component="img"
        sx={{ width: 131, margin:2, borderRadius:7, display:{xs:'none', sm:'block'} }}
        image="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
        alt="Live from space album cover"
      />
      <Box sx={{  flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 " }}>
          <Typography component="div" variant="h5">
            Wheel of Doom
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Web Application to kill random names
          </Typography>
        </CardContent>
        
        <Box 
        sx={{ 
          display: "flex", 
          alignItems: "center", 
          pl: 1, 
          pb: 1,
          width:'100%',
          justifyContent: 'space-between',
          }}>
            
          <Typography component="div" variant="body1">
            HTML CSS JavaScript
          </Typography>
        

          <Box
            sx={{
              display: "flex",
              
              gap:2,
            }}
          >
            <Button sx={{ bgcolor: "black" }} variant="contained">
              <Link sx={{ color: "White" }}>GitHub</Link>
            </Button>
            <Button
              sx={{ bgcolor: "white", borderColor: "black" }}
              variant="contained">
              <Link sx={{ color: "Black" }}>Deploy</Link>
            </Button>

          <IconButton>
            <ArrowForwardIcon/>
          </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
