import React, {Component} from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import actions from '../src/actions'

const URL = 'ws://localhost:3030'

class Chat extends Component {
    state = {
        name: 'NamePostUser',
        messages: [],
    }

    ws = new WebSocket(URL)

    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // on receiving a message, add it to the list of messages
            const message = JSON.parse(evt.data)
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

    addMessage = message =>
        this.setState(state => ({messages: [message, ...state.messages]}))

    submitMessage = messageString => {
        // on submitting the ChatInput form, send the message, add it to the list and reset the input
        const message = {type: actions.INS_MESSAGE, name: this.state.name, message: messageString}
        this.ws.send(JSON.stringify(message))
        this.addMessage(message)
    }

    sendMessage1 = messageString => {
        // on submitting the ChatInput form, send the message, add it to the list and reset the input
        const message = {
            type: actions.INS_MESSAGE,
            name: this.state.name,
            message: messageString + new Date().getMinutes() ,
            values: [{value: "value", name: "name111"}, {value: "value2", name: "name222"}]
        }
        this.ws.send(JSON.stringify(message))
        this.addMessage(message)
        console.log('sendMessage1 message:')
        console.table(message)
        console.log('sendMessage1 successful')
    }

    sendMessage2 = messageString => {
        // on submitting the ChatInput form, send the message, add it to the list and reset the input
        const message = {
            type: actions.DEL_MESSAGE,
            name: this.state.name,
            message: messageString
        }
        this.ws.send(JSON.stringify(message))
        this.addMessage(message)
        console.log('sendMessage1 message:')
        console.table(message)
        console.log('sendMessage1 successful')
    }

    render() {
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
                {this.state.messages.map((message, index) =>
                    <ChatMessage
                        key={index}
                        message={message.message}
                        name={message.name}
                    />,
                )}
                <input type="button" value={'sendMess'}
                       onClick={() => this.sendMessage1("messageString")}/>
                <input type="button" value={'delMess'}
                       onClick={() => this.sendMessage2("messageString"+"33")}/>
            </div>
        )
    }
}

export default Chat
