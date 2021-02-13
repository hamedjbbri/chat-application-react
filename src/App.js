import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'

const App = () => {
    return (
        <ChatEngine
           height = "100vh"
           projectID = "e5efa65b-031e-4cea-a468-c91e41f29d63"
           userName = "Hamed"
           userSecret = "hamedjabbari"
           renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    )
}

export default App