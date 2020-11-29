import React from 'react'

const NoMatch = (props) => {
    var goApp = () => props.history.push("/");
    return <div>Route did not match
    <button onClick={goApp}>Go Home</button></div>;
};

export default NoMatch;