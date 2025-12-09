import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@mui/styles";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import agri_mall_logo_landing_white from "../../public/White_Logo_GAM.png";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#2E7D32",
    color: "white",
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "#3aa8ff",
    },
  },
  icon: {
    color: "white",
    verticalAlign: "middle",
    fontSize: "28px",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
    marginBottom: "10px",
    flexWrap: "wrap",
  },
  addressBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "Arial",
    gap: "10px",
    marginTop: "10px",
    marginBottom: "10px",
  },
  copyright: {
    fontFamily: "Arial",
    marginTop: "20px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const isLaptop = useMediaQuery("(min-width:1024px)");
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Box component="footer" className={classes.footer}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Logo & Social Icons */}
        <Grid item xs={12} md={4}>
          <img
            src={agri_mall_logo_landing_white}
            alt="Agri Mall Logo"
            style={{ width: isLaptop ? "300px" : "100%" }}
          />
          <Box className={classes.textContainer}>
            <a
              href="https://www.linkedin.com/company/greenagrimall"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className={classes.icon} />
            </a>
            <a
              href="https://www.facebook.com/greenagrimall.pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className={classes.icon} />
            </a>
            <a
              href="https://www.youtube.com/@greenagrimallpk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className={classes.icon} />
            </a>
            <a
              href="https://www.instagram.com/greenagrimall.pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className={classes.icon} />
            </a>
            <a
              href="https://www.tiktok.com/@greenagrimall.pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} className={classes.icon} />
            </a>
          </Box>
        </Grid>

        {/* Head Office Center Section */}
        <Grid item xs={12} md={4}>
          <Box className={classes.addressBox}>
            <Typography variant="body2" component="span">
              <strong>Head Office:</strong>
              <br />
              Plaza 118-D, Floor 2&3, Broadway CCA,
              <br />
              DHA Phase 8, Lahore, Pakistan
              <a
                href="https://www.google.com/maps?q=Plaza+118-D,+Broadway+CCA,+DHA+Phase+8,+Lahore,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  size="lg"
                  style={{ color: "white", marginLeft: "10px" }}
                />
              </a>
            </Typography>
          </Box>
        </Grid>

        {/* Main Menu Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            style={{ fontFamily: "Arial", marginBottom: "10px" }}
          >
            Main Menu
          </Typography>

          {currentPath === "/gallery" ? (
            <Typography variant="body1" className="my-1">
              <Link
                to="/"
                className={classes.link}
                style={{ fontFamily: "Arial" }}
              >
                Home
              </Link>
            </Typography>
          ) : (
            <>
              <Typography variant="body1" className="my-1">
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={classes.link}
                  style={{ cursor: "pointer", fontFamily: "Arial" }}
                >
                  About Us
                </ScrollLink>
              </Typography>
              <Typography variant="body1" className="my-1">
                <ScrollLink
                  to="products"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={classes.link}
                  style={{ cursor: "pointer", fontFamily: "Arial" }}
                >
                  Products
                </ScrollLink>
              </Typography>
              <Typography variant="body1" className="my-1">
                <Link
                  to="/gallery"
                  className={classes.link}
                  style={{ cursor: "pointer", fontFamily: "Arial" }}
                >
                  GAM Activities
                </Link>
              </Typography>
            </>
          )}

          {/* Download App Button */}
          <a
            href="/agrimallapp.apk"
            download="agrimallapp.apk"
            style={{
              display: "inline-block",
              cursor: "pointer",
              padding: "10px 20px",
              marginTop: "2px",
              backgroundColor: "#ffffff",
              color: "#2E7D32",
              border: "2px solid #FFD700",
              borderRadius: "5px",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "all 0.3s ease",
              fontFamily: "Arial",
              marginBottom: "10px",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#2E7D32";
              e.target.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.color = "#2E7D32";
            }}
            onTouchStart={(e) => {
              e.target.style.backgroundColor = "#2E7D32";
              e.target.style.color = "#ffffff";
            }}
            onTouchEnd={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.color = "#2E7D32";
            }}
          >
            Download App
          </a>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Typography variant="body2" className={classes.copyright}>
        &copy; {new Date().getFullYear()} Green Agrimall. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
