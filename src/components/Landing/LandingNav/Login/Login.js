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
    axios.get('/auth/user').then(res => {
        this.props.history.push('/home');
    }).catch(()=> console.log('Not logged in.'))
}

handleChange = (field, e) => {
    this.setState({ [`${field}`]: e.target.value })
}

login = () => {
    this.setState({alertMessage: ''}, () => {
        let temp = this.state.email;
        axios.get('/auth/user?email=' + temp).then(res => {
            if (bcrypt.compareSync(this.state.password, res.data)) {
                this.setState({ email: '', password: ''})
                axios.post('/auth/user?email='+ temp).then(res => {
                    this.props.history.push('/home');
                })
            }
            else {
                this.setState({ alertMessage: 'Incorrect Password'})
            }
        }).catch(error => this.setState({ alertMessage: error.response.data}))
    })
}

render() {

        return (
            <div id={this.props.idName}>
                <input type="text" placeholder="email" onChange={(e)=>this.handleChange("email", e)} value={this.state.email}/>
                <input type="password" placeholder="password" onChange={(e)=>this.handleChange("password", e)} value={this.state.password}/>
                <button onClick={()=>this.login()}> Login </button>
                <p id="login-alert">{this.state.alertMessage}</p>
            </div>
        )
    }
}
export default withRouter(Login)