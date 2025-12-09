"use client";

import ImgOverlay from "../imageOverlay/ImageOverlay";
import Our_History from "../../public/about/Our_History.jpg";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Title from "../Title";
import Card from "../customCards/CustomCards";
import useWindowDimensions from "../hooks/useWindowDimensions";
import site_image from "../../public/home/site_image.jpg";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../public/home/GAM_Aim_slide_for_website.jpg";

const About = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
    slider.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    const slider = sliderRef.current;
    slider.isDown = false;
    slider.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    const slider = sliderRef.current;
    slider.isDown = false;
    slider.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    const slider = sliderRef.current;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 1.5;
    slider.scrollLeft = slider.scrollLeftStart - walk;
  };

  const agriLoaningLogos = [
    "/logos/bank_logos/bank1.png",
    "/logos/bank_logos/bank3.png",
    "/logos/bank_logos/bank4.png",
    "/logos/bank_logos/bank6.png",
    "/logos/bank_logos/bank7.png",
    "/logos/bank_logos/bank2.jpg",
    "/logos/bank_logos/bank5.png",
  ];
  const { width } = useWindowDimensions();

  return (
    <div id="about">
      <ImgOverlay
        image={Our_History}
        height={"300px"}
        titlePartOne={
          <span
            style={{
              fontFamily: "'Arial', Helvetica, Arial, sans-serif",
            }}
          >
            Our
          </span>
        }
        titlePartTwo={
          <span
            style={{
              fontFamily: "'Arial', Helvetica, Arial, sans-serif",
            }}
          >
            History
          </span>
        }
      />
      <Box id="about-us">
        <Title title={"Home"}></Title>
        <Grid container mt="50px" alignItems="center" justifyContent="center">
          <Grid
            item
            xs={12}
            lg={6}
            xl={width < 1800 ? 4 : 3}
            alignItems="flex-end"
            boarder="1 solid black"
            style={{
              display: "flex",
              justifyContent: width < 1200 ? "center" : "end",
            }}
          >
            <Card
              mainCardImage={site_image}
              mainCardImageHeight={width < 1200 ? "220px" : "600px"}
              mainCardMaxWidth={"1000px"}
              mainCardBoxShadow={"none"}
              mainCardHeight={width < 1200 ? "250px" : "600px"}
              mainCardMaxHeight={"600px"}
              mainCardBorderRadius={"15px"}
              mainCardWriteOnImage={null}
              basicCard={false}
            />
          </Grid>
          {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
          <Grid
            item
            xs={width <= 800 ? 12 : 9}
            lg={5}
            xl={4}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              paddingLeft: "40px",
              paddingRight: "40px",
              marginTop: width < 1200 ? "30px" : "0px",
            }}
          >
            <Typography
              align="left"
              fontFamily="Arial"
              color="rgb(101,77,52)"
            ></Typography>
            <Typography
              variant="h1"
              align="left"
              fontSize={40}
              mb={3}
              fontFamily="Arial"
            >
              About Us
            </Typography>
            <Typography
              align="left"
              fontFamily="Arial"
              line-height="10px"
              wordSpacing="15px"
              textAlign={"justify"}
            >
              Green Agrimall, a subsidiary of the Green Pakistan Initiative
              (GPI), focuses on two primary missions: ensuring national food
              security and unlocking export potential in the agricultural
              sector. By implementing advanced farming practices and supporting
              local farmers, Green Agrimall aims to maintain a stable food
              supply for Pakistan's growing population.
              <br />
              <br />
              Additionally, it seeks to boost the country's economy by improving
              the quality of agricultural products and expanding access to
              global markets. Through these efforts, Green Agrimall plays a
              crucial role in enhancing Pakistan's agricultural landscape and
              economic growth.
              <br />
              <br />
            </Typography>
          </Grid>

          {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
        </Grid>
      </Box>

      {/* ---------- CEO Message Section ---------- */}
      <Box
        id="ceo-message"
        sx={{
          mt: 8,
          px: width < 800 ? 3 : 10,
          py: 6,
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          fontFamily="Arial"
          color="rgb(25, 135, 84)"
          mb={2}
          textAlign="center"
        >
          CEO's Message
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          fontFamily="Arial"
          mb={1}
          textAlign="center"
        >
          Green Agrimall – A Revolution Towards Agricultural Success
        </Typography>

        <Typography
          fontStyle="italic"
          fontFamily="Arial"
          mb={3}
          textAlign="center"
        >
          Ali Sufian Hamayon (CEO - Green Agrimall Pvt Ltd)
        </Typography>

        <Typography
          fontFamily="Arial"
          sx={{
            lineHeight: 1.8,
            textAlign: "justify",
          }}
        >
          "Modernize, Mechanize, Maximize," Green Agrimall, a subsidiary of the
          Green Pakistan Initiative (GPI), in collaboration with Government of
          Punjab is established with a vision to revolutionize Pakistan's
          agriculture landscape and maximize agriculture output to its true
          potential. It is strongly positioned to address critical agricultural
          challenges in Pakistan through innovative solutions and an integrated
          approach. The twofold mission of the company is to safeguard Nation's
          food security and to unlock the immense export potential inherent in
          our agricultural sector.
          <br />
          <br />
          The primary issue Green Agrimall aims to address is low farmer
          productivity. By providing farmers with high-quality seeds,
          fertilizers, and modern farming technologies under one roof; Green
          Agrimall collaborates with leading manufacturers, ensuring farmers
          have consistent access to genuine agricultural inputs, resolving the
          issue of inconsistent product quality and price. The theme of Green
          Agrimall revolves around making farmers feel at home, fostering an
          atmosphere where they feel open to sharing and learning. We ensure
          that farmers are never exploited with corrupted price hikes as a
          result of illegal hoardings.
          <br />
          <br />
          Additionally, Green Agrimall utilizes advanced technologies such as
          drones and satellite sensing for precision farming to improve resource
          management, promoting efficient use of water and land resources. Green
          Agrimall offers training programs, expert lectures, and digital
          platforms at its sophisticated training centers for farmers' capacity
          building to bridge the knowledge gap; uplifting them to an
          international level of competence. These initiatives equip farmers
          with cutting-edge farming techniques and best practices, ultimately
          increasing productivity, sustainability, and profitability in the
          agricultural sector.
          <br />
          <br />
          In collaboration with Pakistan State Oil (PSO), Green Agrimall
          provides petrol pumps at every site, ensuring convenient access to
          fuel for farmers' machinery and vehicles. This strategic partnership
          with PSO enhances operational efficiency and supports farmers in their
          day-to-day agricultural activities.
        </Typography>
      </Box>

      {/* GAM_Aim_slide */}

      <Box
        sx={{
          mt: 4,
          mb: 6,
          px: width < 800 ? 2 : 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/home/GAM_Aim_slide_for_website.jpg"
          alt="GAM Aim Slide"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        />
      </Box>

      <div>
        {/* ---------- GAM Operational Sites Section ---------- */}
        <Box sx={{ px: isMobile ? 2 : 12, mb: 10 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 3, textAlign: "center" }}
          >
            GAM Operational Sites
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1eO-DX9aTvU-J0CEnY3kUJ8a32579Y7c&ehbc=2E312F&noprof=1&ll=30.75787655651956%2C71.21995894999999&z=6"
              width="100%"
              height="500"
              style={{
                border: 0,
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>

        {/* ------------- agri logos -------------  */}
        {/* rest of code here */}
      </div>

      {/* ------------- agri logos -------------  */}

      <div
        style={{
          textAlign: "center",
          marginTop: "80px",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
            fontFamily: "Arial",
          }}
        >
          Agri Loaning Partners
        </h2>
      </div>

      {/* ------------ Agri Loaning Partners Scrollable Section ------------- */}

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        speed={1500}
        grabCursor={true}
        spaceBetween={40}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        style={{ padding: "20px", cursor: "grab" }}
      >
        {agriLoaningLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.preventDefault()}
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <img
                src={logo || "/placeholder.svg"}
                alt={`Loan Partner ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                  transition: "filter 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.filter = "grayscale(0%)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.filter = "grayscale(100%)")
                }
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
    @keyframes scrollLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}
      </style>
    </div>
  );
};

export default About;
