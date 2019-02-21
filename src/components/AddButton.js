import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    }
});

class AddButton extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div>
                <Fab color="primary" aria-label="Add" className={classes.fab}>
                    <AddIcon/>
                </Fab>
            </div>
        );
    }
}

AddButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);