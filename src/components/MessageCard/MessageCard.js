import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { BASE_URL } from "../../utils/constants";
import { getMessageAge } from "../../utils/helper";

const MessageCard = ({ message = {} }) => {
	return (
<Card style={{ marginBottom: "16px" }}>
			<CardHeader
				avatar={<Avatar alt={message.author.name} src={BASE_URL + message.author.photoUrl} />}
				title={message.author.name}
				subheader={getMessageAge(message.updated)}
			/>

			<CardContent>
				<Typography>{message.content}</Typography>
			</CardContent>
		</Card>
	);
};

export default MessageCard;
