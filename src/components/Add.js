import { Avatar, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from "@mui/material";
import { Add as AddIcon, EmojiEmotions, PersonAdd, VideoCameraBack, Image, DateRange } from "@mui/icons-material"
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import styled from "@emotion/styled";

const Add = () => {
    const [open, setOpen] = useState(false);
    const StyledModal = styled(Modal)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    });

    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px"
    })
    return (
        <>
            <Tooltip sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 20 } }} onClick={
                () => setOpen(true)
            }>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal open={open} onClose={() => setOpen(false)}>
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3} >
                    <Typography variant="h6" color="gray" textAlign="center" mb={1}>
                        Create Post
                    </Typography>

                    <UserBox>
                        <Avatar src="" />
                        <Typography variant="span" fontWeight={500}>
                            Sety Karimi
                        </Typography>
                    </UserBox>

                    <TextField sx={{width: "100%"}} multiline rows={3} placeholder="What's on your mind?" variant="standard"/>

                    <Stack direction="row" gap={1} mt={2} mb={2}>
                         <EmojiEmotions color="primary"/>
                         <Image color="secondary"/>
                         <VideoCameraBack color="success" />
                         <PersonAdd color="error"/>
                    </Stack>

                    <ButtonGroup fullWidth variant="contained">
                        <Button>Post</Button>
                        <Button sx={{width: "100px"}}><DateRange /></Button>
                    </ButtonGroup>

                </Box>
            </StyledModal>
        </>
    )
}

export default Add