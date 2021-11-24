import React, { useState, useEffect, } from 'react'
import { Box, Typography, } from '@mui/material';
import { dashBoardContext } from './context/dashboardContext';
import NavTabs from './components/tabs';
import Searchbar from './components/searchbar';
import TOPICS from '../../../questions/topics';
import ALL_QUESTIONS from '../../../questions/loveBabbar'
import StyledChip from './components/chip';
import { filterData } from './util'
import InfinityScroll from './components/infinitescroll';
import InfiniteScroll from './components/infinitescroll2.0'

// let TABS_MAP = [
//     {
//         title: "ALL QUESTIONS",
//         component: "All questions",
//     },
//     {
//         title: "SOLVED QUESTIONS",
//         component: "Solved questions",
//     },
// ]

const getDisplayDataFromAllQuestionMap = (questionMap) => {
    let data = [];
    Object.keys(questionMap).map((qid, idx) => {
        let queData = questionMap[qid];
        queData = { ...queData, qid };
        return data.push(queData);
    });

    return data;
}

const getDisplayDataFromSolvedQuestionMap = (solvedQuestions) => {
    let data = [];
    Object.keys(solvedQuestions).map((qid, idx) => {
        return data.push({ ...ALL_QUESTIONS[qid], qid, completed: true });
    })

    return data;
}


export default function MainDashboard({ userData }) {
    // const { userData } = useContext(userContext);
    const [currentTab, setCurrentTab] = useState(0);
    const [filterTags, setFilterTags] = useState([]);
    const [displayData, setDisplayData] = useState(null)

    const topicInFilterTags = (topic) => {
        return filterTags.indexOf(topic) >= 0
    }

    const toggleTopic = (tag) => {
        const idx = filterTags.indexOf(tag);
        if (idx >= 0) {
            filterTags.splice(idx, 1);
            setFilterTags([...filterTags]);
        } else {
            filterTags.push(tag);
            setFilterTags([...filterTags]);
        }
    }

    let TABS_MAP = [
        {
            title: "ALL QUESTIONS",
            component: <InfiniteScroll data={displayData} />,
        },
        {
            title: "SOLVED QUESTIONS",
            component: <InfinityScroll data={displayData} />,
        },
    ]

    useEffect(() => {
        if (currentTab === 0) {
            setDisplayData([...filterData(getDisplayDataFromAllQuestionMap(ALL_QUESTIONS), filterTags)]);
        } else if (currentTab === 1) {
            setDisplayData([...filterData(getDisplayDataFromSolvedQuestionMap(userData?.completed), filterTags)]);
        }
    }, [filterTags, currentTab, userData?.completed])

    return (
        <Box sx={{ width: '100%', maxWidth: 500, minWidth: 350 }}>
            <dashBoardContext.Provider value={{ currentTab, setCurrentTab }}>
                <NavTabs tabData={TABS_MAP} />
            </dashBoardContext.Provider>
            <Box sx={{ width: '100%', maxWidth: 500, margin: '3rem 0 1rem 0' }}>
                <Searchbar />
            </Box>
            <Box sx={{ width: '100%', maxWidth: 500, margin: '0 0 1rem 0' }}>
                <Typography variant='body1' gutterBottom>Filter questions by topic</Typography>
                {TOPICS.map((topic, idx) => {
                    return <StyledChip
                        variant={topicInFilterTags(topic) ? 'contained' : 'outlined'}
                        color='secondary'
                        key={idx}
                        label={topic.toLowerCase()}
                        clickable
                        onClick={() => toggleTopic(topic)}
                    />
                })}
            </Box>
            {/* {displayData && <InfiniteScroll data={displayData} />} */}
            {displayData && TABS_MAP[currentTab].component}
        </Box>
    )
}
