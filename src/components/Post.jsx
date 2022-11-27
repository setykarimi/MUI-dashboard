import {  Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Checkbox, Grid } from "@mui/material";

const Post = (props) => {
    return (
        <Grid item lg={6} sm={12} >
        <Card sx={{ height:"100%" }}>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: props.color }} aria-label="recipe">
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
            image={props.image}
            alt={props.alt}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {props.content}
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