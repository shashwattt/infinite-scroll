import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SwipeableViews from "react-swipeable-views";

import MessageCard from "../../components/MessageCard";
import { getMessages } from "../../services/api";

export default function Home() {
	const [messages, setMessages] = useState([]);
	const [pageToken, setPageToken] = useState(null);
	const fetchMoreData = () => {
		const prms = getMessages(pageToken);
		prms.then((res) => {
			setMessages([...messages, ...res.messages]);
			setPageToken(res.pageToken);
		});
	};

	useEffect(() => fetchMoreData(), []);

	const handleSwipe = (id) => () => {
		const msgIndex = messages.findIndex((msg) => msg.id === id);
		messages.splice(msgIndex, 1);
		setMessages([...messages]);
	};

	return (
		<InfiniteScroll
			dataLength={messages.length}
			scrollThreshold={0.7}
			next={fetchMoreData}
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				overflow: "auto",
			}}
			hasMore={true}
			loader={<h4>Loading...</h4>}
			scrollableTarget="scrollableDiv">
			{messages.map((msg) => {
				return (
					<SwipeableViews key={msg.id} axis="x-reverse" onChangeIndex={handleSwipe(msg.id)}>
						<MessageCard message={msg} />
						<div style={{ width: "50vw" }} />
					</SwipeableViews>
				);
			})}
		</InfiniteScroll>
	);
}
