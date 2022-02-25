import { Button, Container, Grid } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import KakaoChat from "../KakaoChat";
import { Box, display } from "@mui/system";
import KakaoFriend from "../KakaoFriend";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
type MenuType = {
  title: string;
  icon: JSX.Element;
  link: string;
};
const KakaoBottomAppbar = () => {
  const menuItems: MenuType[] = [
    {
      title: "채팅",
      icon: <ChatIcon />,
      link: "/chat",
    },
    {
      title: "친구",
      icon: <PeopleIcon />,
      link: "friend",
    },
  ];
  return (
    <>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Container>
          <Toolbar>
            <Grid container>
              {menuItems.map((item: MenuType): JSX.Element => {
                return (
                  <Grid item xs key={item.title}>
                    <Box display="flex" justifyContent="center">
                      <Link to={item.link}>{item.icon}</Link>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default KakaoBottomAppbar;
