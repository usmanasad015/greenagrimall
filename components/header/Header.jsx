"use client";

/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import agri_mall_logo from "../../public/agrimall_onlylogo.png";
import useScrollPosition from "../hooks/useScrollPosition";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

// Define your navigation items
const navItems = [
  { id: 4, title: "GAM - GOPB", link: "GAM-GOPB", type: "scroll" },
  { id: 2, title: "Crop Inputs", link: "products", type: "scroll" },
  { id: 5, title: "Services", link: "concept", type: "scroll" },
  { id: 1, title: "About Us", link: "about", type: "scroll", hasSubmenu: true },
  { id: 3, title: "GAM Activities", link: "/gallery", type: "route" },
];

const Header = (props) => {
  const { scrollY } = useScrollPosition();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileSubmenuToggle = () => {
    setMobileSubmenuOpen(!mobileSubmenuOpen);
  };

  const navBgColor = scrollY === 0 ? "transparent" : "white";

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const renderLogo = () => (
    <img
      src={agri_mall_logo || "/placeholder.svg"}
      alt="Agri Mall"
      style={{
        width: "auto",
        height: "80px",
        marginTop: "15px",
      }}
    />
  );

  const currentPage = location.pathname;

  const filteredNavItems =
    currentPage === "/gallery"
      ? [{ id: 4, title: "Home", link: "/", type: "route" }]
      : navItems;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          height: "100px",
          bgcolor: navBgColor,
          transition: "background-color 0.3s ease-in-out",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" }, color: " rgb(25, 135, 84)" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          >
            {renderLogo()}
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            {filteredNavItems.map((item) =>
              item.type === "scroll" ? (
                <Box
                  key={item.id}
                  sx={{ display: "inline-block", position: "relative" }}
                >
                  {item.hasSubmenu ? (
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0px",
                      }}
                    >
                      <ScrollLink
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        style={{
                          cursor: "pointer",
                          margin: "0 15px",
                          color:
                            props.home && scrollY === 0 ? "white" : "black",
                          textDecoration: "none",
                          fontWeight: "bold",
                          fontFamily: "Arial",
                          display: "inline-flex",
                          alignItems: "center",
                        }}
                      >
                        {item.title}
                      </ScrollLink>
                      <Box
                        onClick={handleMenuOpen}
                        sx={{
                          cursor: "pointer",
                          margin: "0 5px 0 0",
                          color:
                            props.home && scrollY === 0 ? "white" : "black",
                          display: "inline-flex",
                          alignItems: "center",
                          "&:hover": {
                            opacity: 0.7,
                          },
                        }}
                      >
                        <ExpandMoreIcon sx={{ fontSize: "18px" }} />
                      </Box>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        sx={{
                          "& .MuiPaper-root": {
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          },
                        }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleMenuClose();
                          }}
                        >
                          <ScrollLink
                            to="ceo-message"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            style={{
                              textDecoration: "none",
                              color: "inherit",
                              cursor: "pointer",
                              fontFamily: "Arial",
                              fontWeight: "bold",
                            }}
                          >
                            CEO's Message
                          </ScrollLink>
                        </MenuItem>
                      </Menu>
                    </Box>
                  ) : (
                    <ScrollLink
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      style={{
                        cursor: "pointer",
                        margin: "0 15px",
                        color: props.home && scrollY === 0 ? "white" : "black",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontFamily: "Arial",
                      }}
                    >
                      {item.title}
                    </ScrollLink>
                  )}
                </Box>
              ) : (
                <RouterLink
                  key={item.id}
                  to={item.link}
                  style={{
                    margin: "0 15px",
                    color: props.home && scrollY === 0 ? "white" : "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontFamily: "Arial",
                  }}
                >
                  {item.title}
                </RouterLink>
              )
            )}

            {/* For desktop view */}
            <a
              href="/agrimallapp.apk"
              download="agrimallapp.apk"
              style={{
                display: "inline-block",
                cursor: "pointer",
                padding: "10px 20px",
                margin: "0 15px",
                backgroundColor: "#198754",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                textDecoration: "none",
                transition: "background-color 0.3s ease",
                fontFamily: "Arial",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#155d40";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#198754";
              }}
              onTouchStart={(e) => {
                e.target.style.backgroundColor = "#155d40";
              }}
              onTouchEnd={(e) => {
                e.target.style.backgroundColor = "#198754";
              }}
            >
              Download App
            </a>
          </Box>
        </Toolbar>
      </AppBar>

      {/* side nav for mobile view */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 300,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              {renderLogo()}
            </Typography>
            <Divider />
            <List>
              {filteredNavItems.map((item) => (
                <ListItem key={item.id}>
                  {item.type === "scroll" ? (
                    <ListItemButton
                      sx={{ textAlign: "center", display: "block" }}
                    >
                      {item.hasSubmenu ? (
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              cursor: "pointer",
                              gap: "8px",
                            }}
                          >
                            <ScrollLink
                              to={item.link}
                              spy={true}
                              smooth={true}
                              offset={-100}
                              duration={500}
                              style={{
                                textDecoration: "none",
                                cursor: "pointer",
                                flex: 1,
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "Arial",
                                  fontWeight: "bold",
                                  color: "#372d21",
                                }}
                              >
                                {item.title}
                              </span>
                            </ScrollLink>
                            <Box
                              onClick={handleMobileSubmenuToggle}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <ExpandMoreIcon
                                sx={{
                                  fontSize: "18px",
                                  transform: mobileSubmenuOpen
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                  transition: "transform 0.3s",
                                }}
                              />
                            </Box>
                          </Box>
                          {mobileSubmenuOpen && (
                            <Box
                              sx={{
                                pl: 3,
                                mt: 1,
                                borderLeft: "2px solid #198754",
                              }}
                            >
                              <ListItemButton sx={{ textAlign: "center" }}>
                                <ScrollLink
                                  to="ceo-message"
                                  spy={true}
                                  smooth={true}
                                  offset={-100}
                                  duration={500}
                                  style={{
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    width: "100%",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontFamily: "Arial",
                                      fontWeight: "bold",
                                      color: "#372d21",
                                    }}
                                  >
                                    CEO's Message
                                  </span>
                                </ScrollLink>
                              </ListItemButton>
                            </Box>
                          )}
                        </Box>
                      ) : (
                        <ScrollLink
                          to={item.link}
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                          }}
                        >
                          <ListItemText
                            primary={
                              <span
                                style={{
                                  fontFamily: "Arial",
                                  fontWeight: "bold",
                                  color: "#372d21",
                                }}
                              >
                                {item.title}
                              </span>
                            }
                          />
                        </ScrollLink>
                      )}
                    </ListItemButton>
                  ) : (
                    <ListItemButton component={RouterLink} to={item.link}>
                      <ListItemText
                        primary={
                          <span
                            style={{
                              fontFamily: "Arial",
                              fontWeight: "bold",
                              color: "#372d21",
                            }}
                          >
                            {item.title}
                          </span>
                        }
                      />
                    </ListItemButton>
                  )}
                </ListItem>
              ))}

              <Divider />

              {/* For mobile screen */}
              <ListItem>
                <a
                  href="/agrimallapp.apk"
                  download="agrimallapp.apk"
                  style={{
                    display: "inline-block",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "100%",
                    backgroundColor: "#198754",
                    borderRadius: "10px",
                    padding: "8px 0px",
                    transition: "background-color 0.3s ease",
                    fontFamily: "Arial",
                  }}
                >
                  Download App
                </a>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
