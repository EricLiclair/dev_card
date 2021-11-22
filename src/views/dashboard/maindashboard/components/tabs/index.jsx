import React, { useContext } from 'react'
import styled from '@emotion/styled';
import { Tabs, Tab } from '@mui/material';
import { dashBoardContext } from '../../context/dashboardContext';


const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    boxShadow: 'rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px',
    marginBottom: "2rem",
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '60%',
        backgroundColor: "#fff",
    },
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    color: theme.palette.primary.light,
    '&.Mui-selected': {
        color: '#fff',
    },
    '&.Mui-focusVisible': {
        backgroundColor: theme.palette.primary.dark,
    },
}));



// const TABS_DATA = [
//     {
//         header: "ALL QUESTIONS",
//         component: <p>All questions</p>
//     },
//     {
//         header: "SOLVED QUESTIONS",
//         component: <p>Solved questions</p>
//     }
// ]


export default function NavTabs({ tabData }) {
    const { currentTab, setCurrentTab } = useContext(dashBoardContext);
    return (
        <StyledTabs
            value={currentTab}
            onChange={(e, tab) => setCurrentTab(tab)}
            variant="fullWidth"
            scrollButtons="auto"
            centered
        >
            {tabData.map((tab, idx) => {
                return <StyledTab label={tab.title} key={idx} />
            })}
        </StyledTabs>
    )
}
