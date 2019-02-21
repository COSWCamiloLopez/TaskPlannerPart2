import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import loginIcon from '../images/loginIcon.png';

const styles = theme => ({
    button: {
        width: '30%'
    },
    text: {
        width: '30%'
    },
    image: {
        width: '10%',
        marginTop: '3%'
    }
});

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            password: ""
        }

        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCreateAccount = this.handleCreateAccount.bind(this);
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <br/>
                <img
                    src={loginIcon}
                    className={classes.image}
                    alt=""
                />
                <br/>
                <form className={classes.form}>
                    <TextField
                        required
                        id="user"
                        label="User"
                        placeholder="User"
                        margin="normal"
                        className={classes.text}
                        variant="outlined"
                        onChange={this.handleChangeUser}
                    />
                    <br/>
                    <TextField
                        required
                        id="password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        margin="normal"
                        variant="outlined"
                        className={classes.text}
                        onChange={this.handleChangePassword}
                    />
                    <br/>
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleSubmit}
                    >
                        Login
                    </Button>
                    <br/>
                    <br/>
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleCreateAccount}
                    >
                        Create account
                    </Button>
                </form>
            </div>
        );
    }

    handleChangeUser(e) {
        this.setState({user: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value})
    }

    handleSubmit(e) {
        if (localStorage.getItem(this.state.user) !== null) {
            if (localStorage.getItem(this.state.user) === this.state.password) {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = '/tasks';
            }
        } else {
            localStorage.setItem("isLoggedIn", "false");
            window.location.href = '/';
        }
    }

    handleCreateAccount(){
        localStorage.setItem("registerPage", "true");
        window.location.reload();
    }
}

export default withStyles(styles)(Login);