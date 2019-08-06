import { connect } from 'react-redux'
import {login } from '../Services/actions'
import LoginComponent from '../Components/LoginComponent'
const mapStateToProps = state =>(
    {
        loginReply: state.todos.loginReply
})
const mapDispatchToProps = dispatch => ({
    login: (params) => dispatch(login(params)),
})
const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent) 
 
export default Login;       