import { Box, Typography } from "@mui/material"

const Rightbar = () => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", md: "block" } }}>
            <Box position="fixed">
                <Typography variant="h6" fontWeight={400}>Online Friends</Typography>
            </Box>
        </Box>

    )
}

export default Rightbar