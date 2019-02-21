import React, {Component} from 'react';
import AppBarPage from "./AppBar";
import BackIcon from '../images/baseline-keyboard_arrow_left-24px.svg';

const styles = {
    image: {
        width: "250%"
    }
}

class NewTask extends Component {

    render() {

        const {classes} = this.props;

        const backButton = () => (
            <img src={BackIcon} className={classes.image}/>

        );

        return (
            <div>
                <AppBarPage image={backButton}/>
            </div>
        );
    };
}

export default NewTask;