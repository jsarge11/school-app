import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import bcrypt from 'bcryptjs'
import './login.css'


class Login extends Component {
    state = {
        email: '',
        password: '',
        alertMessage: ''
    }

componentDidMount() {
    axios.get('http://localhost:4000/auth/user').then(res => {
        this.props.history.push('/home');
    }).catch(()=> console.log('Not logged in.'))
}

handleChange = (field, e) => {
    this.setState({ [`${field}`]: e.target.value })
}

login = () => {
    this.setState({alertMessage: ''}, () => {
        let temp = this.state.email;
        axios.get('http://localhost:4000/auth/user?email=' + temp).then(res => {
            if (bcrypt.compareSync(this.state.password, res.data)) {
                console.log('password correct');
                this.setState({ email: '', password: ''})
                axios.post('http://localhost:4000/auth/user?email='+ temp).then(res => {
                    console.log('pushing to home');
                    this.props.history.push('/home');
                }).catch(error => console.log(error))
            }
            else {
                this.setState({ alertMessage: 'Incorrect Password'})
            }
        }).catch(error => console.log(error))
    })
}

render() {

        return (
            <div id={this.props.idName}>
                <input type="text" placeholder="email" onChange={(e)=>this.handleChange("email", e)} value={this.state.email}/>
                <input type="password" placeholder="password" onChange={(e)=>this.handleChange("password", e)} value={this.state.password}/>
                <button id="login-button" onClick={()=>this.login()}> Login </button>
                <p id="login-alert">{this.state.alertMessage}</p>
            </div>
        )
    }
}
export default withRouter(Login)