import React, { useContext, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StyledChip from '../chip';
import { Box, Button, CircularProgress } from '@mui/material';
import Tick from '../../../../../assets/lottie/tick';
import COMPLETED_QUESTIONS from '../../../../../questions/test_completed'
import { Check } from '@mui/icons-material';
import { addSolvedQuestion } from '../../../../../utils/firestore';
import { userContext } from '../../../../../context/usercontext';

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
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [play, setPlay] = useState(false)
    const animateCompletion = () => {
        setPlay(true);
    }

    const markAsCompleted = () => {
        addSolvedQuestion(user.uid, questionData.qid, "some important note")
            .then((res) => {
                console.log("ADDED QUESTION TO SOLVED LIST", res)
                setCompleted(true);
            })
    }

    useEffect(() => {

        if (userData?.completed[questionData.qid] ? true : false) {
            setCompleted(true);
        }

    }, [user, userData, completed])
    return (
        <Card elevation={0} sx={{ margin: "1rem 0" }}>
            <CardHeader
                action={

                    !userData ? <CircularProgress sixe='16' />
                        :
                        (
                            !completed ? <IconButton onClick={markAsCompleted} aria-label="add to favorites"><Check onClick={animateCompletion} /></IconButton>
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
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography>
                        {questionData.description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
