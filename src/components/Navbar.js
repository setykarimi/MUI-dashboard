import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box } from "@mui/system";
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));


const Navabar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky" sx={{paddingLeft: {xs: "25px", sm: "10px"}}}>
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Sety Dev</Typography>
                <MenuRoundedIcon sx={{ display: { xs: "none", sm: "none" } }} />
                <Search bgcolor={"background.default"}><InputBase placeholder="Search ..."  color={"text.primary"}/></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>

                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src="" />
                </Icons>

                <UserBox onClick={() => setOpen(true)} sx={{cursor: "pointer"}}>
                    <Avatar sx={{ width: 30, height: 30 }} src="" />
                    <Typography>Setykarimi</Typography>
                </UserBox>
            </StyledToolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navabar