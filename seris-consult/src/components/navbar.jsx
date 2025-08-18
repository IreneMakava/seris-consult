import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../assets/logo.png";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          backgroundColor: "#1F6E3F", // fern green
          color: "#fff",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo / Brand */}
          <Box
            component={Link}
            to="/"
            aria-label="Home"
            sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          >
            <Box
              component="img"
              src={logo}
              alt="Seris Consult logo"
              sx={{ height: 50, cursor: "pointer", backgroundColor: "whitesmoke", px: 1 }}
            />
          </Box>

          {/* Desktop nav */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              {/* Anchor scroll instead of route */}
              <Button color="inherit" href="#about">
                About Us
              </Button>
              <Button color="inherit" href="#services">
                Our Services
              </Button>
              <Button color="inherit" href="#footer">
                Contact
              </Button>
              <Button
                variant="contained"
                href="#footer"
                sx={{
                  ml: 1,
                  backgroundColor: "#d93f1a", // chili red CTA
                  "&:hover": { filter: "brightness(0.9)" },
                  borderRadius: 2,
                  textTransform: "none",
                }}
              >
                Get In Touch
              </Button>
            </Box>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }} role="presentation">
          <List>
            <ListItemButton component={Link} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItemButton>
            {/* Anchor links for sections */}
            <ListItemButton component="a" href="#about" onClick={toggleDrawer(false)}>
              <ListItemText primary="About Us" />
            </ListItemButton>
            <ListItemButton component="a" href="#services" onClick={toggleDrawer(false)}>
              <ListItemText primary="Our Services" />
            </ListItemButton>
            <ListItemButton component="a" href="#footer" onClick={toggleDrawer(false)}>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </List>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ mt: 1, px: 1 }}>
            <Typography variant="body2">
              <strong>Phone:</strong> +255 787 089 937
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong> info@serisconsult.co.tz
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
