import { connect } from 'react-redux'
import AppComponent from '../App'
const mapStateToProps = state => (
    {
        loginReply: state.todos.loginReply
    })
const mapDispatchToProps = dispatch => ({
   
})

const App = connect(
    mapStateToProps, 
    mapDispatchToProps
)(AppComponent)

export default App;     