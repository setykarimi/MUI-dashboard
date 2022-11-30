import { Home, ModeNight } from "@mui/icons-material";
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Face4Icon from '@mui/icons-material/Face4';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const Sidebar = ({ mode, setMode }) => {
    const [isShow, setIsShow] = useState(false);

    const clickHandler = () => {
        setIsShow(!isShow);
        console.log(isShow)
    }
    return (
        <>
            <MenuIcon sx={{ display: { xs: "block", sm: "none" } , position: "fixed", top: "16px", zIndex: "9999", left: "10px", color: "#fff", cursor: "pointer" }} onClick={clickHandler}/>
            <Box flex={1} p={2} sx={{ display:  {sm: "block", xs: `${isShow ? "block" : "none"}`} , position: {xs:`${isShow ? "absolute" : ""}`}}}>
                <Box position="fixed"  bgcolor={"background.default"} sx={{ top: {sm: "70px", xs: "50px"} , left: {xs: "0"} , zIndex: "1", height: "100vh", padding: {xs: "20px"}}}>
                    <List>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <ArticleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                        <ListItemButton component="a" href="#groups">
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                        <ListItemButton component="a" href="#market">
                            <ListItemIcon>
                                <StorefrontIcon />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                        <ListItemButton component="a" href="#friends">
                            <ListItemIcon>
                                <Face4Icon />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                        <ListItemButton component="a" href="#setting">
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>

                        <ListItemButton component="a" href="#profile">
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />
                        </ListItemButton>
                    </List>
                </Box>
            </Box>
        </>
    )
}

export default Sidebar