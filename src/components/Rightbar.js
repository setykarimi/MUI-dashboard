import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import React from "react"

const Rightbar = () => {
    return (
        <Box flex={2} p={1} sx={{ display: { xs: "none", md: "block" } }}>
            <Box position="fixed" p={2}>
                <Typography variant="h6" fontWeight={400}>Online Friends</Typography>
                <AvatarGroup max={6}>
                    <Avatar alt="person" src="https://mui.com/static/images/avatar/6.jpg" />
                    <Avatar alt="person" src="https://mui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="person" src="https://mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="person" src="https://mui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="person" src="https://mui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="person" src="https://mui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="person" src="https://mui.com/static/images/avatar/7.jpg" />
                    <Avatar alt="person" src="https://mui.com/static/images/avatar/8.jpg" />
                    <Avatar alt="person" src="https://mui.com/static/images/avatar/9.jpg" />
                </AvatarGroup>

                <Typography variant="h6" fontWeight={400} mt={4} mb={3}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={120} gap={4}>
                    <ImageListItem>
                        <img src="https://mui.com/static/images/image-list/breakfast.jpg" alt="breakfast" />
                    </ImageListItem>

                    <ImageListItem>
                        <img src="https://mui.com/static/images/image-list/burgers.jpg" alt="burger" />
                    </ImageListItem>

                    <ImageListItem>
                        <img src="https://mui.com/static/images/image-list/camera.jpg" alt="breakfast" />
                    </ImageListItem>
                </ImageList>


                <Typography variant="h6" fontWeight={400} mt={4} mb={3}>Latest Conversation</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/9.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/10.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/9.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>

    )
}

export default Rightbar