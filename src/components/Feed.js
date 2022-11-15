import { Box, Grid } from "@mui/material"
import Post from "./Post"

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </Grid>
        </Box>
    )
}

export default Feed