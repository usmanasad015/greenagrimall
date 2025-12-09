import ImgOverlay from "../imageOverlay/ImageOverlay";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import phase1 from "../../public/growthSection/Phase1.png";
import phase2 from "../../public/growthSection/Phase2.png";
import phase3 from "../../public/growthSection/Phase3.png";
import "../../src/index.css";
import Growth_Plan from "../../public/home/Growth_Plan.jpg";

// ✅ Import the new component
import PartneringSection from "../../components/growthPlan/PartneringSection";

const growthPlan = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "16px",
    justifyContent: "space-around",
    alignItems: "stretch",
  };

  const cardStyle = {
    flex: 1,
    margin: "0 10px",
  };

  const cardActionAreaStyle = {
    cursor: "default",
    userSelect: "text",
  };

  const cardContentStyle = {
    userSelect: "text",
  };

  return (
    <div id="about">
      <ImgOverlay
        image={Growth_Plan}
        height={"100px"}
        titlePartOne={
          <span style={{ fontFamily: "'Arial', Helvetica, Arial, sans-serif" }}>
            Growth
          </span>
        }
        titlePartTwo={
          <span style={{ fontFamily: "'Arial', Helvetica, Arial, sans-serif" }}>
            Plan
          </span>
        }
      />

      <Box>
        <Container style={containerStyle} className="my-5">
          {/* Card 1 */}
          <Card style={cardStyle}>
            <CardActionArea style={cardActionAreaStyle} disableRipple>
              <div
                style={{
                  height: "140px",
                  backgroundColor: "#2E7D32", // dark green
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  color: "#ffffff",
                  textAlign: "center",
                  padding: "0 10px",
                }}
              >
                <Typography
                  variant="h6"
                  fontFamily="Arial"
                  fontWeight="bold"
                  fontSize="1.2rem"
                >
                  GAM – Inauguration
                </Typography>
              </div>

              <CardContent style={cardContentStyle}>
                {/* Card subheading */}
                <Typography
                  variant="h5"
                  fontFamily="Arial"
                  fontSize="1.2rem"
                  fontWeight="bold"
                  gutterBottom
                >
                  Mega Green Agrimall at Marot, Cholistan
                </Typography>

                {/* Card details */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontFamily="Arial"
                  fontSize="1rem"
                  component="div"
                >
                  <ul style={{ lineHeight: "1.8", marginTop: "10px" }}>
                    <li>
                      Inaugurated by Honorable{" "}
                      <b>Chief Minister Punjab Ms. Maryam Nawaz Sharif</b> &{" "}
                      <b>
                        Chief of Army Staff (COAS) General Syed Asim Munir,
                        NI(M)
                      </b>{" "}
                      on 14-02-2025
                    </li>
                    <li>
                      This milestone marks the beginning of a new era in
                      Pakistan's agricultural sector
                    </li>
                    <li>
                      Business activities have started 14-02-25, creating a hub
                      for trading, networking, and accessing agricultural
                      supplies
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* Card 2 */}
          <Card style={cardStyle}>
            <CardActionArea style={cardActionAreaStyle} disableRipple>
              <div
                style={{
                  height: "140px",
                  backgroundColor: "#2E7D32", // dark green
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  color: "#ffffff",
                  textAlign: "center",
                  padding: "0 10px",
                }}
              >
                <Typography
                  variant="h6"
                  fontFamily="Arial"
                  fontWeight="bold"
                  fontSize="1.2rem"
                >
                  2025
                </Typography>
              </div>
              <CardContent style={cardContentStyle}>
                <Typography
                  variant="h5"
                  fontFamily="Arial"
                  fontSize="1.2rem"
                  fontWeight="bold"
                >
                  Green Agrimall in all provinces including Gilgit Baltistan and
                  Azad Jammu Kashmir
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontFamily="Arial"
                  fontSize="1rem"
                  component="div"
                >
                  <ul style={{ marginTop: "10px" }}>
                    <li style={{ marginBottom: "10px", lineHeight: "1.9" }}>
                      29 GAM Sites in Punjab
                    </li>
                    <li style={{ marginBottom: "10px", lineHeight: "1.9" }}>
                      3 GAM Sites in Sindh
                    </li>
                    <li style={{ marginBottom: "10px", lineHeight: "1.9" }}>
                      1 GAM Site in Balochistan
                    </li>
                    <li style={{ marginBottom: "10px", lineHeight: "1.9" }}>
                      1 GAM Site in KPK
                    </li>
                    <li style={{ marginBottom: "10px", lineHeight: "1.9" }}>
                      1 GAM Site in GB
                    </li>
                    <li style={{ marginBottom: "10px", lineHeight: "1.9" }}>
                      1 GAM Site in AJK
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* Card 3 */}
          <Card style={cardStyle}>
            <CardActionArea style={cardActionAreaStyle} disableRipple>
              <div
                style={{
                  height: "140px",
                  backgroundColor: "#2E7D32", // dark green
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "4px",
                  color: "#ffffff",
                  textAlign: "center",
                  padding: "0 10px",
                }}
              >
                <Typography
                  variant="h6"
                  fontFamily="Arial"
                  fontWeight="bold"
                  fontSize="1.2rem"
                >
                  2026
                </Typography>
              </div>
              <CardContent style={cardContentStyle}>
                <Typography
                  variant="h5"
                  fontFamily="Arial"
                  fontSize="1.2rem"
                  fontWeight="bold"
                >
                  Mega Sites Transform Agriculture
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontFamily="Arial"
                  fontSize="1rem"
                  component="div"
                >
                  <ul style={{ marginTop: "10px" }}>
                    <li style={{ marginBottom: "10px", lineHeight: "1.9" }}>
                      Expansion Plan 2025 – “50+ sites”
                    </li>
                    <li style={{ marginBottom: "10px", lineHeight: "1.9" }}>
                      Expansion Plan 2026 – “250+ sites”
                    </li>
                    <li style={{ marginBottom: "10px", lineHeight: "1.9" }}>
                      Expansion 2027 onwards – “100+ sites annually”
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Box>

      {/* ✅ Use the new section here */}
      <PartneringSection />
    </div>
  );
};

export default growthPlan;
