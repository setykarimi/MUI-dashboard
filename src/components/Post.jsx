import {  Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Checkbox, Grid } from "@mui/material";

const Post = (props) => {
    return (
        <Grid item lg={6} sm={12}>
        <Card>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                   {props.name}
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
            }
            title={props.title}
            subheader={props.subheader}
        />
        <CardMedia
            component="img"
            height="250"
            image="https://cleanfoodcrush.com/wp-content/uploads/2020/10/Clean-Food-Crush-Spicy-New-Orleans-Inspired-Shrimp-Recipe.jpg"
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }}/>} />
            </IconButton>
            <IconButton aria-label="share">
                <Share />
            </IconButton>
        </CardActions>
    </Card>
    </Grid>
    )
}

export default Post 