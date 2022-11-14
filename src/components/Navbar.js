import { AppBar, Toolbar, styled, Typography, InputBase } from "@mui/material";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box } from "@mui/system";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    backgroundColor: "white"
}))


const Navabar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display: {xs:"none" , sm: "block"}}}>Sety Dev</Typography>
                <MenuRoundedIcon sx={{display : {xs: "none" , sm:"none"}}}/>
                <Search><InputBase placeholder="Search ..."/></Search>
                <Icons>icon</Icons>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navabar