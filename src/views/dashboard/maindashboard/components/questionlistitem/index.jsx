import React, { useContext, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StyledChip from '../chip';
import { Box, CircularProgress, Tooltip } from '@mui/material';
import Tick from '../../../../../assets/lottie/tick';
import { Check, InsertLink, } from '@mui/icons-material';
import { addSolvedQuestion } from '../../../../../utils/firestore';
import { userContext } from '../../../../../context/usercontext';
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, TextField, Button } from '@mui/material';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));




export default function QuestionListItem({ questionData, type = "all" }) {
    const { user, userData } = useContext(userContext);
    const [expanded, setExpanded] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [open, setOpen] = useState(false);
    const [noteData, setNoteData] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [play, setPlay] = useState(false)
    const animateCompletion = () => {
        setPlay(true);
    }

    const markAsCompleted = () => {
        addSolvedQuestion(user.uid, questionData.qid, noteData)
            .then((res) => {
                console.log("ADDED QUESTION TO SOLVED LIST", res, play)
                setCompleted(true);
                animateCompletion();
                handleClose();
            })
    }

    useEffect(() => {

        if (userData?.completed[questionData.qid] ? true : false) {
            setCompleted(true);
        }

    }, [user, userData, completed])



    return (
        <Card elevation={0} sx={{ margin: "1rem 0" }}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add a note</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Use this to store some formula, link to reference resources, approach, etc. which
                        you might not want to forget over the period of time. <br />
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="note"
                        label="Notes"
                        type="text"
                        maxRows={4}
                        fullWidth
                        variant="standard"
                        onChange={(event) => setNoteData(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color='secondary' onClick={handleClose}>Cancel</Button>
                    <Button variant='contained' color='secondary' onClick={markAsCompleted}>Proceed</Button>
                </DialogActions>
            </Dialog>
            <CardHeader
                action={

                    !userData ? <CircularProgress sixe='16' />
                        :
                        (
                            !completed ? <IconButton onClick={handleClickOpen} aria-label="add to favorites"><Check onClick={animateCompletion} /></IconButton>
                                :
                                <IconButton aria-label="add to favorites">
                                    <Tick
                                        autoplay={true}
                                        isStopped={!completed}
                                        height={24}
                                    />
                                </IconButton>
                        )
                }


                title={questionData['description'].slice(0, 1).toUpperCase() + questionData['description'].slice(1,).toLowerCase() || "null"}
                subheader={
                    <Box>
                        {questionData.qid}
                    </Box>
                }
            />
            <CardContent>
                <Box>
                    <Typography variant='overline'>Tags: </Typography>
                    {questionData.topics.map((tag, idx) =>
                        <>
                            <StyledChip
                                variant='contained'
                                color='secondary'
                                key={idx}
                                label={tag.toLowerCase()}
                            />
                        </>
                    )}
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton> */}
                <Tooltip title='link to problem'>
                    <IconButton type='link' target={'_blank'} href={questionData.link} aria-label="share">
                        <InsertLink />
                    </IconButton>
                </Tooltip>
                {userData?.completed[questionData.qid]?.note && <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>}
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {completed && <>
                        <Typography variant='body1' >
                            {userData?.completed[questionData.qid]?.note}
                        </Typography>
                    </>}
                </CardContent>
            </Collapse>
        </Card >
    )
}
