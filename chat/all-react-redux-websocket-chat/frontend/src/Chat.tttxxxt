import React, {Component} from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import connect from "react-redux/lib/connect/connect";
import actions from '../src/actions'

const URL = 'ws://localhost:3030'

function mapStateToProps(state) {
    return {
        messages: state.users
    }
}

class Chat extends Component {
    /*constructor(props) {
        super(props)
    }*/

    state = {
        name: 'NameUser1',
        //  messages: [],
    }

    ws = new WebSocket(URL)

    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // on receiving a message, add it to the list of messages
            console.log('get message evt.data: ', evt.data)
            const message = JSON.parse(evt.data)
            console.log(' JSON message : ', message)
            this.addMessage(message)
        }

        this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss
            this.setState({
                ws: new WebSocket(URL),
            })
        }
    }

    addMessage = message => {
        console.log("message: ")
        console.table(message)
      //  this.props.dispatch({type: actions.INS_MESSAGE, ...message})
       // let tmp = {type: actions.INS_MESSAGE, ...message};
       // let tmp = {...message};
        let tmp = message;
        console.log("tmp: ")
        console.table(tmp)
        this.props.dispatch(tmp)
    };
    // this.setState(function = state => ({messages: [message, ...state.messages]});)

    submitMessage = messageString => {
        // on submitting the ChatInput form, send the message, add it to the list and reset the input
        const message = {name: this.state.name, message: messageString}
        this.ws.send(JSON.stringify(message))
        this.addMessage(message)
        console.log('send message')
    }

    render() {
        console.log("render Chat")
        console.table(this.props.messages)
        return (
            <div>
                <label htmlFor="name">
                    Name:&nbsp;
                    <input
                        type="text"
                        id={'name'}
                        placeholder={'Enter your name...'}
                        value={this.state.name}
                        onChange={e => this.setState({name: e.target.value})}
                    />
                </label>
                <ChatInput
                    ws={this.ws}
                    onSubmitMessage={messageString => this.submitMessage(messageString)}
                />
                {this.props.messages.map((message, index) =>
                    <ChatMessage
                        key={index}
                        message={message.message}
                        name={message.name}
                    />,
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Chat)
