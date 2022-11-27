import { Box, Grid } from "@mui/material"
import Post from "./Post"

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Post color="cyan" name="R" title="Pasta" subheader="September 14, 2016"/>
                <Post color="blue" name="B" title="Pizza" subheader="Octber 21, 2022"/>
                <Post color="purple" name="S" title="Salad" subheader="November 22, 2021"/>
                <Post color="pink" name="T" title="Kebab" subheader="December 23, 2018"/>
                <Post color="orange" name="LA" title="Tiramisu" subheader="July 25, 2021"/>
            </Grid>
        </Box>
    )
}

export default Feed