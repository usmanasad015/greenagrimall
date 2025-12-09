import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import setelliteSensing from "../../public/home/setelliteSensing.jpg";
import setelliteSensing_new from "../../public/home/setelliteSensing_new.jpg";
import Agri_loaning from "../../public/home/Agri_loaning.jpeg";

// import setelliteSensing from "../../public/home/setellite_sensing.jpg";
// import History from "../../public/about/History.webp";
// import Services_We_Provide from "../../public/home/Services_We_Provide.jpg";
// import ImgOverlay from "../imageOverlay/ImageOverlay";
// import AboutImage from "../../public/about/Sky_Closeup_Ear_botany_501921_3840x2400.webp";
// import Title from "../Title";
// import Card from "../customCards/CustomCards";
// import useWindowDimensions from "../hooks/useWindowDimensions";
// import tractor from "../../public/tractor.png";
// import growthImage from "../../public/growthImage.png";
// import Phygital_Services from "../../public/home/Phygital_Services.jpg";
// import Phygital1 from "../../public/home/phygital1.jpg";
// import mainImage from "../../public/conceptSection/mainImage.png";

const About = () => {
  const suppliersLogos = [
    "/logos/supplier_logos/supplier1.png",
    "/logos/supplier_logos/supplier2.png",
    "/logos/supplier_logos/supplier3.png",
    "/logos/supplier_logos/supplier4.png",
    "/logos/supplier_logos/supplier5.png",
    "/logos/supplier_logos/supplier6.jpg",
    "/logos/supplier_logos/supplier7.png",
    "/logos/supplier_logos/supplier8.jpg",
    "/logos/supplier_logos/supplier9.png",
    "/logos/supplier_logos/supplier10.png",
    "/logos/supplier_logos/supplier11.png",
    "/logos/supplier_logos/supplier12.png",
    "/logos/supplier_logos/supplier13.png",
    // "/logos/supplier_logos/supplier14.png",
    // "/logos/supplier_logos/supplier15.png",
    "/logos/supplier_logos/supplier16.png",
  ];
  return (
    <div id="concept">
      {/* <ImgOverlay
        image={Services_We_Provide}
        height="100%"
        titlePartOne="Services"
        titlePartTwo="We Provide"
      /> */}
      <br /> <br />
      <Box id="">
        <Container className="">
          {/* ------------- Satellite Sensing ------------- */}
          <Row className="align-items-center ">
            <Col md={8} lg={8} className="order-md-1 order-2">
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                className="mb-0"
                src={setelliteSensing_new}
                alt="Main"
              />
            </Col>
            <Col md={4} lg={4} className="order-md-2 order-1">
              <Typography
                fontFamily="Arial"
                style={{
                  marginBottom: "16px",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Satellite Sensing
              </Typography>

              <Typography
                fontFamily="Arial"
                component="ul"
                style={{
                  paddingLeft: "20px",
                  margin: "0",
                  listStyleType: "disc",
                }}
              >
                <li style={{ marginBottom: "12px" }}>
                  Enables continuous, real-time monitoring of farm conditions
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Allowing farmers to track crop health, soil moisture, and
                  other vital metrics remotely
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Provides accurate data for efficient use of resources (water,
                  fertilizers), reducing waste and improving yields
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Reduce agriculture expenses and achieve operational excellence
                  based on data
                </li>
              </Typography>
            </Col>
          </Row>
          <br /> <br />
          {/* Green Agrimall Agricultural Loans */}
          <Row className="align-items-center ">
            {/* TEXT FIRST NOW */}
            <Col md={4} lg={4} className="order-md-1 order-1">
              <Typography
                fontFamily="Arial"
                style={{
                  marginBottom: "16px",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Green Agrimall Agricultural Loans
              </Typography>

              <Typography
                fontFamily="Arial"
                component="ul"
                style={{
                  paddingLeft: "20px",
                  margin: "0",
                  listStyleType: "disc",
                }}
              >
                <li style={{ marginBottom: "12px" }}>
                  Agricultural loans available through leading commercial banks
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Loan approval valid for up to three years
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Markup is charged only on the amount utilized
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Discounted markup rates for Green Agrimall registered farmers
                </li>
              </Typography>
            </Col>

            {/* IMAGE SECOND NOW */}
            <Col md={8} lg={8} className="order-md-2 order-2">
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                className="mb-0"
                src={Agri_loaning}
                alt="Main"
              />
            </Col>
          </Row>
          {/* ---------------- Produce Off take ----------------  */}
          {/* <Row className="align-items-center mt-5">
            <Col md={8} lg={8} className="order-md-2 order-2">
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                className="mb-0"
                src={setelliteSensing}
                alt="Main"
              />
            </Col>
            <Col md={4} lg={4} className="order-md-1 order-1">
              <Typography
                fontFamily="Arial"
                style={{
                  marginBottom: "16px",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Produce Offtake
              </Typography>

              <Typography
                fontFamily="Arial"
                component="ul"
                style={{
                  paddingLeft: "20px",
                  margin: "0",
                  listStyleType: "disc",
                }}
              >
                <li style={{ marginBottom: "12px" }}>
                  Access to the best agricultural practices and training to
                  increase crop yield and quality
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Reliable direct platform for farmers to sell produce
                </li>
                <li style={{ marginBottom: "12px" }}>
                  Provides farmers with better prices for their crops
                </li>
              </Typography>
            </Col>
          </Row> */}
        </Container>
      </Box>
      <div
        style={{ textAlign: "center", marginTop: "80px", marginBottom: "50px" }}
      >
        <h2
          style={{
            // fontSize: "3rem",
            fontWeight: "bold",
            // background: "linear-gradient(90deg, #2980b9, #6dd5fa)",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            marginBottom: "10px",
            fontFamily: "Arial",
          }}
        >
          Trusted Suppliers
        </h2>
      </div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 1000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={4}
        speed={1500}
        // pagination={{ clickable: true }}
        // navigation
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        style={{ padding: "20px" }}
      >
        {suppliersLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.preventDefault()}
              style={{ cursor: "default", textDecoration: "none" }}
            >
              <img
                src={logo}
                alt={`Supplier ${index + 1}`}
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
    </div>
  );
};

export default About;
