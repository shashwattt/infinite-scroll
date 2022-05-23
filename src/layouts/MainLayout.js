import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import Header from "../components/Header";

const styles = (theme) => ({
	root: {
		display: "flex",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		marginTop: theme.spacing(7),
		overflowX: "hidden",
	},
});

class MainLayout extends Component {
	render() {
		const { classes, children } = this.props;
		return (
			<Fragment>
				<div className={classes.root}>
					<Header handleToggleDrawer={this.handleToggleDrawer} />
					<main className={classNames(classes.content)}>{children}</main>
				</div>
			</Fragment>
		);
	}
}

export default withStyles(styles)(MainLayout);
