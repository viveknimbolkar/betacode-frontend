import styled from "@emotion/styled";
import {
  Box,
  Button,
  Collapse,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import codepen from "./codepen.png";
import adoby from "./adoby.jpg";
import logo from "./logo.png";
import v from "./v.png";
import {
  ExpandLessOutlined,
  ExpandMoreOutlined,
  WindowOutlined,
} from "@mui/icons-material";

function Sidemenu() {
  const [open, setOpen] = useState(false);

  const Handleclick = () => {
    setOpen(!open);
  };

  const Sidemenucontainer = styled(Box)`
    font-family:Lato;
    display;flex;
    position:fixed;
    align-items:center;
    justify-content:center;
    color: #c7c7c9;
    padding:10px;
    height:100vh;
    overflow-y:scroll;
    overflow-x:hidden;
    width: 210px;
    border:2px solid red;
    background: #1e1f26;
  `;
  const Image = styled(Box)`
    display: flex;
    justify-content: start;
    align-items: center;
  `;
  const Sidecont = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: starts;
    flex-direction: column;
    margin-top: 10px;
  `;
  const Sbutton = styled(Box)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
  `;
  const Firstlist = styled(Box)`
    display: flex;
    align-items: starts;
    flex-direction: column;
  `;
  const Bottomimg = styled(Box)``;
  const Hidecont = styled(Box)`
    border: 2px solid red;
  `;
  return (
    <>
      <Sidemenucontainer>
        <Image>
          <Box component="img" src={codepen} height="36px" />
        </Image>
        <Sidecont>
          <Sbutton>
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: "550",
                marginTop: "10px",
              }}
              variant="h6"
            >
              CREATE{" "}
            </Typography>
            <Button
              sx={{
                display: "flex",
                backgroundColor: "#2c303a",
                justifyContent: "start",
                padding: "10px",
                width: "160px",
                borderTop: "4px solid #20bfef",
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
              onClick={Handleclick}
              size="large"
              variant="contained"
              startIcon={<WindowOutlined />}
            >
              Pen
              {open ? (
                <ExpandMoreOutlined sx={{ marginLeft: "30px" }} />
              ) : (
                <ExpandLessOutlined sx={{ marginLeft: "30px" }} />
              )}
            </Button>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List
                component="div"
                sx={{
                  display: "flex",
                  gap: "4px",
                  flexDirection: "column",
                  width: "160px",
                  justifyContent: "start",
                }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    backgroundColor: "#2c303a",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={logo}
                    height="18px"
                    marginRight="5px"
                  />
                  <Typography variant="h6" fontSize="15px">
                    Pen
                  </Typography>
                </ListItemButton>
                <ListItemButton
                  sx={{
                    backgroundColor: "#2c303a",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={v}
                    height="18px"
                    marginRight="5px"
                  />
                  <Typography variant="h6" fontSize="15px">
                    Vue Pen
                  </Typography>
                </ListItemButton>
              </List>
            </Collapse>
            <Button
              sx={{
                backgroundColor: "#2c303a",
                width: "160px",
                padding: "10px",
                display: "flex",
                justifyContent: "start",
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
              size="large"
              variant="contained"
              startIcon={<WindowOutlined />}
            >
              Collection
            </Button>
          </Sbutton>
          <Firstlist>
            <ListItemButton
              sx={{
                width: "195px",
                display: "flex",
                justifyContent: "flex-starts",
                marginTop: "15px",
                "&:hover": {
                  background: "var( --cb-buttonhover-b1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#f9f9f9",
                }}
              >
                Your Work
              </Typography>
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "195px",
                display: "flex",
                justifyContent: "start",
                "&:hover": {
                  background: "var( --cb-buttonhover-b1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#f9f9f9",
                }}
              >
                Activity
              </Typography>
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "195px",
                display: "flex",
                justifyContent: "start",
                "&:hover": {
                  background: "var( --cb-buttonhover-b1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#f9f9f9",
                }}
              >
                Assets
              </Typography>
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "195px",
                display: "flex",
                justifyContent: "start",
                "&:hover": {
                  background: "var( --cb-buttonhover-b1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#f9f9f9",
                }}
              >
                Pinned Items
              </Typography>
            </ListItemButton>

            <ListItemButton
              sx={{
                width: "195px",
                display: "flex",
                justifyContent: "start",
                marginTop: "20px",
                "&:hover": {
                  background: "var( --cb-buttonhover-b1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#f9f9f9",
                }}
              >
                Following
              </Typography>
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "195px",
                display: "flex",
                justifyContent: "start",
                "&:hover": {
                  background: "var( --cb-buttonhover-b1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#f9f9f9",
                }}
              >
                Trending
              </Typography>
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "195px",
                display: "flex",
                justifyContent: "start",
                "&:hover": {
                  background: "var( --cb-buttonhover-b1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#f9f9f9",
                }}
              >
                Challenges
              </Typography>
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "195px",
                display: "flex",
                justifyContent: "start",
                "&:hover": {
                  background: "var( --cb-buttonhover-b1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#f9f9f9",
                }}
              >
                sparks
              </Typography>
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "195px",
                display: "flex",
                justifyContent: "start",
                marginTop: "20px",
                "&:hover": {
                  background: "var( --cb-buttonhover-b1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#f9f9f9",
                }}
              >
                Codepen
              </Typography>
            </ListItemButton>
          </Firstlist>
          <Bottomimg>
            <Box
              component="img"
              src={adoby}
              height="100px"
              width="130px"
              marginTop="40px"
            />
            <Typography
              sx={{
                fontSize: "10px",
              }}
              variant="h6"
            >
              Get 10 Free Images From Adobe Stock. Start Now. ads via Carbon
            </Typography>
          </Bottomimg>
        </Sidecont>
      </Sidemenucontainer>
    </>
  );
}

export default Sidemenu;
