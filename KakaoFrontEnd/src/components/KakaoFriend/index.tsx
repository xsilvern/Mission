import { Container, Grid } from "@mui/material";
import { Button, Box } from "@material-ui/core";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import ListSubheader from "@mui/material/ListSubheader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import KakaoFriendAdd from "../KakaoFriendAdd";
import { useState } from "react";
type friendType = {
  id: number;
  name: string;
  subtitle?: string;
  profileImageSrc: string;
};
const KakaoFriend = () => {
  const testFriends: friendType[] = [
    {
      id: 1,
      name: "이름",
      subtitle: "상태메세지",
      profileImageSrc:
        "https://w.namu.la/s/45507892b4f48b2b3d4a6386f6dae20c28376a8ef5dfb68c7cc95249ec358e3e68df77594766021173b2e6acf374b79ce02e9eeef61fcdf316659e30289e123fbddf6e5ec3492eddbc582ee5a59a2ff5d6ee84f57ad19277d179b613614364ad",
    },
    {
      id: 2,
      name: "이름",
      subtitle: "상태메세지",
      profileImageSrc:
        "https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_295/88-7.jpg",
    },
  ];
  const [friendList, SetFriendList] = useState<friendType[]>(testFriends);
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          height: "25%",
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        <ListSubheader>
          친구 목록
          <KakaoFriendAdd />
        </ListSubheader>
        {friendList.map((item) => {
          return (
            <ListItem key={item.id}>
              <Container sx={{ border: 1 }}>
                <Grid container>
                  <Grid item xs={1}>
                    <Button>
                      <img
                        src={item.profileImageSrc}
                        alt="profile"
                        width="100%"
                        height="100%"
                      />
                    </Button>
                  </Grid>
                  <Grid item xs={11}>
                    <Grid container>
                      <Grid item xs={12}>
                        <ListItemText primary={item.name} />
                      </Grid>
                      <Grid item xs={12}>
                        <ListItemText
                          primary={item.subtitle}
                          sx={{ color: "text.disabled" }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default KakaoFriend;
