import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, MenuItem, Drawer, Box, Typography} from "@mui/material";

function Head () {
  const [inputSearch, setInputSearch] = useState("");
  const [isdraweropen, setisdraweropen] = useState(false)

    return (
        <>
         <div className="header">
          <div className="header__left">
            
          <MenuIcon className="header__menuIcon"  onClick={() => setisdraweropen(true)} />

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

          <SearchIcon className="header__inputButton" />
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
        <Drawer anchor='left' open={isdraweropen} onClose={() => setisdraweropen(false)}>
                <Box p={2} width="250px" textAlign="center" role="presentation">
                    <Typography variant="6" component="div">Music</Typography>
                </Box>
                

        </Drawer>
        </>

    );
}

export default Head;