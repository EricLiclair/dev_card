import { Box, CircularProgress } from "@mui/material";
import React, { useState, } from "react";
import IScroll from "react-infinite-scroll-component";
import QuestionListItem from "../questionlistitem";

export default function InfinityScroll({ data }) {
    const [items, setItems] = useState(Array.from({ length: 10 }))
    const [hasMore, setHasMore] = useState(true);
    const fetchMoreData = () => {
        if (items.length >= data.length) {
            setHasMore(false);
            return;
        }
        // a fake async api call like which sends
        // 10 more records in .5 secs
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 10 })));
        }, 2000);
    };
    return (
        <Box>
            <IScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={
                    <Box padding={"1rem"} textAlign={'center'} ><CircularProgress size={32} color="secondary" /></Box>
                }
                height={400}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {items.map((i, idx) => (
                    data[idx] ? <QuestionListItem key={idx} questionData={data[idx]} type="solved" /> : null
                ))}
            </IScroll>
        </Box>
    );
}