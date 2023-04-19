import React from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  CardHeader,
  Avatar,
} from "@mui/material";
import Head from "./Head";

function Video() {
  const location = useLocation([]);
  console.log(location);
  const playVideo = (view) => {
    navigate("/video", {
      state: { text: view },
    });
    console.log(view);
  };
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyCGX1F8mLAqcp-9N3Qnh0pVAgbqRs81Avk&textFormat=plainText&part=snippet&videoId=${location.state.text.id}&maxResults=100&page`
    )
      .then((response) => response.json())
      .then((result) => setData(result.items))
      .catch((error) => console.log("error", error));
    console.log(data);
  }, []);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyCGX1F8mLAqcp-9N3Qnh0pVAgbqRs81Avk"
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items))
      .catch((error) => console.log("error", error));
    console.log(video);
  }, []);

  return (
    <>
      <Head />
      <Grid container >
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Box sx={{ width: "100%", height: "auto", marginLeft: "33px" }}>
            {" "}
            <ReactPlayer
              width="auto"
              url={`https://www.youtube.com/watch?v=${location.state.text.id}`}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
                facebook: {
                  appId: "12345",
                },
              }}
            />
            <h5 style={{ fontSize: "16px" }}>
              {location.state.text.snippet.title}
            </h5>
            <Box sx={{width:"100%"}}>
            <CardHeader
              sx={{ marginTop: "-30px" }}
              avatar={
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/dropbox-512.png"
                />
              }
              title={<b> {location.state.text.snippet.channelTitle}</b>}
              subheader={"3.44k Subscribers"}
            />
            <Box sx={{ marginTop: "-50px", marginLeft: "200px" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  borderRadius: "30px",
                  fontSize: "12px",
                  fontColor: "White",
                }}
              >
                <b>Subscribe</b>
              </Button>
              <Box sx={{ ml: "360px", mt: "-35px" }}>
                <Button
                  sx={{
                    backgroundColor: "#f2f2f2",
                    borderRadius: "30px",
                    fontSize: "10px",
                    fontColor: "White",
                  }}
                >
                  <ThumbUpOffAltIcon
                    sx={{ color: "black", fontSize: "30px" }}
                  />{" "}
                  <b
                    style={{
                      color: "black",
                      marginLeft: "3px",
                      fontSize: "15px",
                    }}
                  >
                    {location.state.text.statistics.likeCount}
                  </b>
                  <ThumbDownOffAltIcon
                    sx={{ color: "black", marginLeft: "6px", fontSize: "30px" }}
                  />{" "}
                </Button>
              </Box>
            </Box> </Box>
            <Box
              sx={{
                backgroundColor: "#f2f2f2",
                borderRadius: "20px",
                mt: "20px",
              }}
            >
              <h4 style={{ marginLeft: "10px" }}>
                {location.state.text.statistics.viewCount},views
              </h4>{" "}
              <a style={{ marginLeft: "10px" }}>
                {location.state.text.snippet.description}
              </a>{" "}
            </Box>
            {data.map((item, index) => {
              return (
                <>
                  <Box sx={{ marginTop: "50px" }}>
                    <CardHeader
                      sx={{ marginTop: "-30px" }}
                      avatar={
                        <Avatar
                          sx={{ marginTop: "-40px" }}
                          alt="Remy Sharp"
                          src={
                            item.snippet.topLevelComment.snippet
                              .authorProfileImageUrl
                          }
                        />
                      }
                      title={
                        <b>
                          {" "}
                          {
                            item.snippet.topLevelComment.snippet
                              .authorDisplayName
                          }
                        </b>
                      }
                      subheader={
                        <p style={{ color: "black" }}>
                          {item.snippet.topLevelComment.snippet.textOriginal}
                        </p>
                      }
                    />
                    <Box>
                      {" "}
                      <ThumbUpOffAltIcon
                        sx={{ marginTop: "-900px", ml: "70px" }}
                      />{" "}
                      {item.snippet.topLevelComment.snippet.likeCount}
                      <ThumbDownOffAltIcon
                        sx={{ marginTop: "-900px", ml: "70px" }}
                      />{" "}
                    </Box>
                  </Box>
                </>
              );
            })}
          </Box>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
        {video.map((item, index) => {
          return (
              <Card
                  sx={{
                      
                maxWidth: 345,
                  borderRadius: "10px",
                  ml: "10px",
                  marginRight: "10px",
                  border: "none",
                      boxShadow: "none",
                  marginLeft:"100px"
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
          
          );
        })}{" "}
              </Grid>
          </Grid>
    </>
  );
}

export default Video;
