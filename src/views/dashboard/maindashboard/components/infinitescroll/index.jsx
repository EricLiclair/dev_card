import { Box, CircularProgress, Skeleton } from "@mui/material";
import React from "react";
import { render } from "react-dom";
import IScroll from "react-infinite-scroll-component";
import QuestionListItem from "../questionlistitem";

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

export default class InfiniteScroll extends React.Component {
    state = {
        items: Array.from({ length: 10 }),
        hasMore: true
    };

    fetchMoreData = () => {
        if (this.state.items.length >= this.props.data.length) {
            this.setState({ hasMore: false });
            return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 10 }))
            });
        }, 2000);
    };

    render() {
        return (
            <Box>
                <IScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
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
                    {this.state.items.map((i, idx) => (
                        this.props.data[idx] ? <QuestionListItem key={idx} questionData={this.props.data[idx]} /> : null
                    ))}
                </IScroll>
            </Box>
        );
    }
}
