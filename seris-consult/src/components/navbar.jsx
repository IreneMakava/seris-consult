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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import logo from '../assets/logo.png'

const services = [
  { name: "Project Management", path: "/project-management" },
  { name: "Strategic Plans", path: "/strategic" },
  { name: "Business Plans", path: "/business" },
  { name: "Budgeting", path: "/budget" },
  { name: "Monitoring and Evaluation", path: "/mEvaluation" },
  { name: "Quality Management Systems", path: "/quality" },
  { name: "Human Resource Management", path: "/humanResource" },
  { name: "Events Management", path: "/events" },
  { name: "Training Programs", path: "/training" },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const openServices = Boolean(anchorElServices);
  const handleServicesOpen = (e) => setAnchorElServices(e.currentTarget);
  const handleServicesClose = () => setAnchorElServices(null);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
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
          <Box component={Link} to="/" aria-label="Home" sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Box
              component="img"
              src={logo} // replace with your actual logo path
              alt="Seris Consult logo"
              sx={{ height: 40, cursor: "pointer", backgroundColor: 'whitesmoke', px:1}}
            />
          </Box>

          {/* Desktop nav */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/aboutUs">
                About Us
              </Button>

              {/* Services dropdown */}
              <Button
                color="inherit" component={Link} to="/ourServices"
              >
                Our Services
              </Button>
              
              <Button color="inherit" component={Link} to="#footer">
                Contact
              </Button>
              <Button
                variant="contained"
                component={Link}
                to="#footer"
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
            <ListItemButton component={Link} to="/aboutUs" onClick={toggleDrawer(false)}>
              <ListItemText primary="About Us" />
            </ListItemButton>

            <ListItemButton component={Link} to="/ourServices" onClick={toggleDrawer(false)}>
              <ListItemText primary="Our Services" />
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
