import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const timelineEvents = [
  {
    title: "Registrations Open",
    date: "20th July, 2024",
    backgroundImage: "url('/public/timeline/tl-bg1.png')",
  },
  {
    title: "Awareness Session",
    date: "18th July, 2024",
    backgroundImage: "url('/public/timeline/tl-bg2.png')",
  },
  {
    title: "Registrations Close",
    date: "18th July, 2024",
    backgroundImage: "url('/public/timeline/tl-bg3.png')",
  },
  {
    title: "Online Session",
    date: "24th July, 2024",
    backgroundImage: "url('/public/timeline/tl-bg1.png')",
  },
  {
    title: "Qualifier Round",
    date: "10th August, 2024",
    backgroundImage: "url('/public/timeline/tl-bg2.png')",
  },
  {
    title: "The Finale",
    date: "11th August, 2024",
    backgroundImage: "url('/public/timeline/tl-bg3.png')",
  },
];

const Timeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: 10,
        pb: 10,
      }}
    >
      <Container>
        <Typography
          variant="h2"
          component="p"
          align="center"
          color="white"
          gutterBottom
          sx={{ fontFamily: "var(--font-sora)" }}
        >
          Event Timeline
        </Typography>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "4px",
              backgroundColor: "white",
              zIndex: 1,
            }}
          />
          <Grid container spacing={6}>
            {timelineEvents.map((event, index) => (
              <Grid item xs={12} key={index} sx={{ zIndex: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundImage: event.backgroundImage,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "15px",
                    padding: "20px",
                    margin: "20px 0",
                  }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      bgcolor: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="p"
                      sx={{ fontFamily: "var(--font-sora)" }}
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="p"
                      sx={{ fontFamily: "var(--font-sora)" }}
                    >
                      {event.date}
                    </Typography>
                  </Paper>
                  <Avatar
                    sx={{
                      bgcolor: "white",
                      color: "black",
                      height: 56,
                      width: 56,
                      mt: 3,
                      boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    {index + 1}
                  </Avatar>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Timeline;
