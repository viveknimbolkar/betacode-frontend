import styled from "@emotion/styled";
import {
  Box,
  Button,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import codepen from "./codepen.png";
import adoby from "./adoby.jpg";
import { ExpandMoreOutlined, WindowOutlined } from "@mui/icons-material";

function Sidemenu() {
  const Sidemenucontainer = styled(Box)`
    border: 2px solid red;
    font-family:sans-serif;
    display;flex;
    align-items:center;
    justify-content:center;
    color: white;
    padding:10px;
    width: 250px;
    background: #454545;
  `;
  const Image = styled(Box)`
    display: flex;
    justify-content:start;
    align-items: center;
  `;
  const Sidecont = styled(Box)`
    display: flex;
    justify-content: center;
    align-items:starts;
    flex-direction:column;
    margin-top:10px;
  `;
  const Sbutton = styled(Box)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap:5px;
  `;
  const Firstlist = styled(Box)`
  display: flex;
  align-items:starts;
  flex-direction: column;
  `;
  const Bottomimg = styled(Box)``;
  return (
    <>
      <Sidemenucontainer>
        <Image>
          <Box component="img" src={codepen} height="36px" />
        </Image>
        <Sidecont>
          <Sbutton>
            <Typography sx={{
              fontSize:"15px",
              fontWeight:"500",
            }} variant="h6">Create</Typography>
            <Button
              sx={{
                display:'flex',
                backgroundColor:"black",
                justifyContent:"start",
                padding: "10px",
                width: "160px",
              }}
              size="large"
              variant="contained"
              startIcon={<WindowOutlined />}
              endIcon={<ExpandMoreOutlined />}
            >
              Pen
            </Button>
            <Button
              sx={{
                backgroundColor:"black",
                width: "160px",
                padding: "10px",
                display:'flex',
                justifyContent:"start",
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
                width: "240px",
                display: "flex",
                justifyContent: "center",
                "&:hover":{
                  backgroundColor:'black',
                  transition:"1s"
                }
              }}
            >
              <ListItemText sx={{
                fontSize:'18px',
                fontWeight:"500",
               
              }} primary="Your Work" />
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "240px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ListItemText primary="Activity" />
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "240px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ListItemText primary="Assets" />
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "240px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ListItemText primary="Pinned Items" />
            </ListItemButton>

            <ListItemButton
              sx={{
                width: "240px",
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <ListItemText primary="Following" />
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "240px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ListItemText primary="Trending" />
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "240px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ListItemText primary="Challenges" />
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "240px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ListItemText primary="Sparks" />
            </ListItemButton>
            <ListItemButton
              sx={{
                width: "240px",
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <ListItemText primary="Codepen" />
            </ListItemButton>
          </Firstlist>
          <Bottomimg>
            <Box component="img" src={adoby} height="100px" width="130px" />
            <Typography sx={{
              fontSize:"10px"
            }} variant="h6">
              Get 10 Free Images From Adobe Stock. Start Now. ads via Carbon
            </Typography>
          </Bottomimg>
        </Sidecont>
      </Sidemenucontainer>
    </>
  );
}

export default Sidemenu;
