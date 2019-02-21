import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import ArrowBack from '@material-ui/icons/ArrowBack';


const styles = {
    backButton: {
        marginLeft: -12,
        marginRight: 20
    },
    arrowBack: {

    }
}

class AppBarPage extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const {classes} = this.props;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.backButton}
                            onClick={this.handleBackPage}
                        >
                            <ArrowBack className={classes.arrowBack}/>
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Task Planner
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

    handleBackPage(){
        window.location.href = '/tasks';
    }
}

export default withStyles(styles)(AppBarPage);