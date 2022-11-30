import { Box, Grid } from "@mui/material"
import Post from "./Post"

const Feed = () => {
    return (
        <Box flex={4} p={2} sx={{paddingLeft: '0px!important'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Post color="red" name="P" title="Pasta" alt="Pasta" subheader="September 14, 2016" 
                image="https://img.freepik.com/free-photo/comida-lifestyle-spaghetti-foodie-gastronomy_1350-47.jpg?t=st=1669571405~exp=1669572005~hmac=a4e9baccc0bd616fd1d4fbac11ec170196e066defa4fd90737a5539ae76cd6fd"
                content="met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"/>

                <Post color="secondary" name="P" title="Pizza" alt="Pizza" subheader="Octber 21, 2022" 
                image="https://img.freepik.com/premium-photo/tasty-pepperoni-pizza-with-mushrooms-olives_79782-1976.jpg"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"/>

                <Post color="green" name="S" title="Salad" alt="Salad" subheader="November 22, 2021" 
                image="https://img.freepik.com/free-photo/salad-chicken-breast-with-zucchini-cherry-tomatoes_2829-8505.jpg?t=st=1669571421~exp=1669572021~hmac=605c8a51bd882a0a8a83470b483af2d860489c03e3e40c6b369b5458e54b07e3"
                content=" adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"/>

                <Post color="brown" name="K" title="Kebab" alt="Kebab" subheader="December 23, 2018" 
                image="https://img.freepik.com/free-photo/flat-lay-tasty-kebab-with-condiments-plate_23-2148685477.jpg?t=st=1669571443~exp=1669572043~hmac=bbb5d4852991a2356aed350b29b2c7bf94a42cc5a7a02c4150722a3ce677ceb1"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ut"/>

                <Post color="orange" name="T" title="Tiramisu" alt="Tiramisu" subheader="July 25, 2021" 
                image="https://img.freepik.com/premium-photo/concept-tasty-dessert-with-tiramisu-cake-close-up_185193-77839.jpg"
                content=" amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationo laboris nisi ut"/>
            </Grid>
        </Box>
    )
}

export default Feed