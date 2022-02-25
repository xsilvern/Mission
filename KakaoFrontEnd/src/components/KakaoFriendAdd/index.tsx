import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { jsx } from "@emotion/react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import ListSubheader from "@mui/material/ListSubheader";
import { Grid, Container, Input } from "@mui/material";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
type friendType = {
  id: number;
  name: string;
  subtitle?: string;
  profileImageSrc: string;
};

const KakaoFriendAdd = (): JSX.Element => {
  const testFriends: friendType[] = [
    {
      id: 1,
      name: "이름이름이름이름긴이름아아아아아아아아주기이이이이이이이이인이이이이르으으음",
      subtitle: "상태메세지",
      profileImageSrc:
        "https://ww.namu.la/s/1a646b4d3aff62aadd94a17aedd8323b8849318e30c3e6358b2e11688f64b366f6932bfdc8e3de15fbb0ffb8c35955595a0ce03fd9484cbf027954fd9088ca0d8e0d1ec863cebac29b65d4f64f50f3a07f1f5c3cd8e32ed78c130519f3131e256f71802ff88e46a9888d8ce985417fa0",
    },
    {
      id: 2,
      name: "이름",
      subtitle: "상태메세지",
      profileImageSrc:
        "https://ww.namu.la/s/1a646b4d3aff62aadd94a17aedd8323b8849318e30c3e6358b2e11688f64b366f6932bfdc8e3de15fbb0ffb8c35955595a0ce03fd9484cbf027954fd9088ca0d8e0d1ec863cebac29b65d4f64f50f3a07f1f5c3cd8e32ed78c130519f3131e256f71802ff88e46a9888d8ce985417fa0",
    },
    {
      id: 3,
      name: "이름",
      subtitle: "상태메세지",
      profileImageSrc:
        "https://ww.namu.la/s/1a646b4d3aff62aadd94a17aedd8323b8849318e30c3e6358b2e11688f64b366f6932bfdc8e3de15fbb0ffb8c35955595a0ce03fd9484cbf027954fd9088ca0d8e0d1ec863cebac29b65d4f64f50f3a07f1f5c3cd8e32ed78c130519f3131e256f71802ff88e46a9888d8ce985417fa0",
    },
    {
      id: 4,
      name: "이름",
      subtitle: "상태메세지",
      profileImageSrc:
        "https://ww.namu.la/s/1a646b4d3aff62aadd94a17aedd8323b8849318e30c3e6358b2e11688f64b366f6932bfdc8e3de15fbb0ffb8c35955595a0ce03fd9484cbf027954fd9088ca0d8e0d1ec863cebac29b65d4f64f50f3a07f1f5c3cd8e32ed78c130519f3131e256f71802ff88e46a9888d8ce985417fa0",
    },
  ];
  const [friendList, SetFriendList] = useState<friendType[]>(testFriends);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>
        <AddCircleOutlineIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          overflow: "auto",
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            친구 추가
          </Typography>
          <p>친구 전화번호로 검색</p>
          <Input type="text"></Input> <Button variant="outlined">추가</Button>
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              height: "25%",
              maxHeight: 300,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            <ListSubheader>추천 친구</ListSubheader>
            {friendList.map((item) => {
              return (
                <ListItem key={item.id}>
                  <Container sx={{ border: 1 }}>
                    <Grid container>
                      <Grid item xs={3}>
                        <Button>
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              overflow: "hidden",
                              position: "relative",
                            }}
                          >
                            <img
                              src={item.profileImageSrc}
                              alt="profile"
                              width="100%"
                              height="100%"
                            />
                          </div>
                        </Button>
                      </Grid>
                      <Grid item xs={7}>
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
                      <Grid item xs={2}>
                        <Button>
                          <AddCircleOutlineIcon />
                        </Button>
                      </Grid>
                    </Grid>
                  </Container>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Modal>
    </>
  );
};
export default KakaoFriendAdd;
