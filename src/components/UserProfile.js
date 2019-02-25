import React, {Component} from 'react';
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from '@material-ui/icons/ArrowBack';
import AppBarPage from "./AppBar";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    backButton: {
        marginLeft: -12,
        marginRight: 20
    }
});

class UserProfile extends Component {
    render() {

        const {classes} = this.props;

        const iconButton = (
            <IconButton
                className={classes.backButton}
                onClick={this.handleBackPage}
            >
                <ArrowBack/>
            </IconButton>
        );

        return (
            <>
                <AppBarPage button={iconButton}/>
            </>
        );
    };

    handleBackPage() {
        window.location.href = "/tasks"
    }
}

export default withStyles(styles)(UserProfile);