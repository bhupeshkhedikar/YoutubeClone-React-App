import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Avatar, MenuItem, Drawer, Box } from "@mui/material";
import { Typography, Button, Grid, Card, CardContent } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=IN&key=AIzaSyCGX1F8mLAqcp-9N3Qnh0pVAgbqRs81Avk"
    )
      .then((response) => response.json())
      .then((result) => setData(result.items))
      .catch((error) => console.log("error", error));
    console.log(data);
  }, []);

  const getData = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${inputSearch}&key=AIzaSyCGX1F8mLAqcp-9N3Qnh0pVAgbqRs81Avk`
    )
      .then((response) => response.json())
      .then((result) => setData(result.items))
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = () => {
    getData();
    // setInputSearch("");
  };

  const playVideo = (view) => {
    navigate("/video", {
      state: { text: view },
    });
    console.log(view);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="header__left">
          <MenuIcon className="header__menuIcon" />

          <img
            className="header__logo"
            src="https://static.vecteezy.com/system/resources/previews/003/206/623/original/youtube-editorial-app-icon-free-vector.jpg"
            alt=""
          />
        </div>
        <div className="header__input">
          <input
            className="headerInput__input"
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            placeholder="Search"
            type="text"
          />

          <SearchIcon className="header__inputButton" onClick={handleSubmit} />
        </div>
        <div className="header__icons">
          <VideoCallIcon className="header__icon" />
          <AppsIcon className="header__icon" />
          <NotificationsIcon className="header__icon" />
          <Avatar
            src="https://yt3.ggpht.com/yti/AJo0G0mwt_f8FEOLBXX2pg0OHxMQPK_d9vspbGWtPQom=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="Ozan Gürsucu"
          />
        </div>
      </div>
      <center>
        <Box>
          <Button sx={{ backgroundColor: "#e0e0e0", color: "black" }}>
            Music
          </Button>{" "}
          &nbsp; &nbsp;&nbsp;{" "}
          <Button sx={{ backgroundColor: "#e0e0e0", color: "black" }}>
            Grammer
          </Button>
          &nbsp; &nbsp;&nbsp;
          <Button sx={{ backgroundColor: "#e0e0e0", color: "black" }}>
            Live
          </Button>
          &nbsp; &nbsp; &nbsp;
          <Button sx={{ backgroundColor: "#e0e0e0", color: "black" }}>
            Sales
          </Button>
          &nbsp; &nbsp;&nbsp;
          <Button sx={{ backgroundColor: "#e0e0e0", color: "black" }}>
            Practice
          </Button>
          &nbsp; &nbsp;&nbsp;
          <Button sx={{ backgroundColor: "#e0e0e0", color: "black" }}>
            Comedy
          </Button>
          &nbsp; &nbsp;&nbsp;
          <Button sx={{ backgroundColor: "#e0e0e0", color: "black" }}>
            Product
          </Button>{" "}
        </Box>
        <br />
      </center>

      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {data.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Card
                  sx={{
                    maxWidth: 345,
                    borderRadius: "10px",
                    ml: "10px",
                    marginRight: "10px",
                    border: "none",
                    boxShadow: "none",
                  }}
                  key={index}
                  onClick={() => playVideo(item)}
                >
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    url={`https://www.youtube.com/watch?v=${item.id}`}
                    config={{
                      youtube: {
                        playerVars: { showinfo: 1 },
                      },
                      facebook: {
                        appId: "12345",
                      },
                    }}
                  /> 
                  <CardContent>
                    <Box>
                      <Box>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                      </Box>
                      <h5 style={{ marginTop: "-40px", marginLeft: "50px" }}>
                        {item.snippet.localized
                          ? item.snippet.localized.title
                          : item.snippet.title}
                      </h5>
                      <Typography
                        sx={{
                          marginLeft: "50px",
                          fontSize: "12px",
                          marginTop: "-15px",
                        }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.snippet.channelTitle}
                      </Typography>
                      {/* <Typography sx={{marginLeft:"50px", fontSize:"12px"}} variant="body2" color="text.secondary">
                               {item.statistics.viewCount} Views
        </Typography> */}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}{" "}
        </Grid>
      </Box>
    </>
  );
}

export default Header;
