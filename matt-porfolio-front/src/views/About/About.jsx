import { Button, CardMedia, IconButton, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProfileImg from "../../components/assets/img/ProfileImg.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaLaravel,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiMaterialui, SiMysql, SiPhp, SiTailwindcss } from "react-icons/si";

function About() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: "text.secondary" }}
      >
        ABOUT ME
        <hr />
      </Typography>

      <Box
        sx={{
          bgcolor: "gray",
          alignItems: "center",
          margin: 5,
          padding: 5,
          borderRadius: 10,
          justifyContent: "center",
          display: "flex",
        }}
      >
       
          <CardMedia
            component="img"
            sx={{ width: 250, margin: 2, borderRadius: 50 }}
            image={ProfileImg}
            alt="Matt Sandoval Balada"
          />
           <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ color: "text.secondary" }}>
              Matt Sandoval Balada
            </Typography>
            <IconButton>
              <LinkedInIcon />
              <GitHubIcon />
              <WhatsAppIcon />
            </IconButton>
          </Box>
          <Typography sx={{ color: "text.secondary" }}>
            Lorem fistrum te va a hasé pupitaa por la gloria de mi madre a peich
            caballo blanco caballo negroorl amatomaa amatomaa la caidita torpedo
            se calle ustée condemor. Papaar papaar papaar papaar a gramenawer
            ese pedazo de. .
          </Typography>
          <Box>
            <Button>
              <Link>Download CV</Link>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h4" sx={{ color: "text.secondary", textAlign: "center" }}>
          Skills and Lenguages
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Box sx={{ color: "text.secondary" }}>
            <Typography sx={{ color: "text.secondary" }}>Front-End</Typography>
            <Box sx={{ display: "flex", gridTemplateColumns: "1fr", gap: 3 }}>
              <FaHtml5 size={70} />
              <FaCss3Alt size={70} />
              <DiJavascript1 size={70} />
              <FaBootstrap size={70} />
              <SiTailwindcss size={70} />
              <FaReact size={70} />
              <FaSass size={70} />
              <SiMaterialui size={70} />
            </Box>
          </Box>
          <Box sx={{ color: "text.secondary" }}>
            <Typography sx={{ color: "text.secondary" }}>Back-End</Typography>
            <Box sx={{ gap: 3, display: "flex" }}>
              <SiPhp size={70} />
              <FaLaravel size={70} />
              <SiMysql size={70} />
              <FaPython size={70} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
