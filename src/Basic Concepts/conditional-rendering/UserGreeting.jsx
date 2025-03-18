/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

function UserGreeting(props) {
    
    /*
    if(props.isLoggedIn) {
        return (
            <h2>Welcome {props.username}</h2>
        )
    }
    else {
        return (
            <h2>Please log in to continue</h2>
        )
    }
    */
                            
    const welcomeMsg = {
        fontSize: "2.5em",
        backgroundColor: "hsl(120, 100%, 42%)",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        margin: "0",
    }

    const loginPmt = {
        fontSize: "2.5em",
        backgroundColor: "hsl(0, 100%, 42%)",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        margin: "0",
    }

    const welcomeMessage = <h2 style={welcomeMsg} className="welcome-msg">
                            Welcome {props.username}</h2>

    const loginPrompt = <h2 style={loginPmt} className="login-prompt">
                            please log in to continue</h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);

}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting