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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CardProject(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{
          width: 131,
          margin: 2,
          borderRadius: 7,
          display: { xs: "none", sm: "block" },
        }}
        image={props.works.image}
        alt={props.works.name + " image"}
      />
      <Box sx={{ flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 " }}>
          <Typography component="div" variant="h5">
            {props.works.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.works.description}
          </Typography>
        </CardContent>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 1,
            pb: 1,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography component="div" variant="body1">
            {props.works.technologies}
          </Typography>

          <Box
            sx={{
              display: "flex",

              gap: 2,
            }}
          >
            <Button sx={{ bgcolor: "black" }} variant="contained">
              <Link
                target="_blank"
                href={props.works.github}
                sx={{ color: "White" }}
              >
                GitHub
              </Link>
            </Button>
            <Button
              sx={{ bgcolor: "white", borderColor: "black" }}
              variant="contained"
            >
              <Link
                target="_blank"
                href={props.works.deploy}
                sx={{ color: "Black" }}
              >
                Deploy
              </Link>
            </Button>

            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
