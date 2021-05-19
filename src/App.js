import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';

import ChatFeed from './components/ChatFeed';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine 
            height = "100vh"
            publicKey = "b970f359-1c40-4812-bd51-5c2a027c536a"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps)=> <ChatFeed { ... chatAppProps}/>}
        />
    );
}

export default App;