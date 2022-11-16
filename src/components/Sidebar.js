import { Home, ModeNight } from "@mui/icons-material";
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Face4Icon from '@mui/icons-material/Face4';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"

const Sidebar = ({mode, setMode}) => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed">
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
                    <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")}/>
                </ListItemButton>
            </List>
            </Box>
        </Box>
    )
}

export default Sidebar