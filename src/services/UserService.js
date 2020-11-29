// import { Component } from "react";

// class UserService extends Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Anonymous"
//         }
//     }


//     getUsername = () => {
//         return this.state.username;
//     }

//     setUsername = (name) => {
//         this.setState({ username: name })
//         this.updateMe();
//     }

//     updateMe = () => { }
// }

// export default UserService


class UserService {

    constructor() {
        this.username = "Anonymous";
        this.productCount = 0;
    }

    // getUsername = () => {
    //     return this.username;
    // }

    // setUsername = (name) => {
    //     this.username = name;
    //     this.updateMe();
    // }

    // updateMe = () => { }
}

export default UserService