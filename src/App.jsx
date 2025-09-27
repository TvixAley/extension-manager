import { useState } from 'react'
import Header from "./components/Header/Header.jsx";
import MainContainer from "./components/MainContainer/MainContainer.jsx";
import data from './data/data.json'

function App() {

    const [extensions, setExtensions] = useState(data)

    return (
        <>
            <Header/>
            <MainContainer extensions={extensions} setExtensions={setExtensions}/>
        </>
    )
}

export default App
