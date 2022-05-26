import React from 'react'
import './App.css'
import Modal from './Modal'

const App = () => {
    // Modal props
    const [show, setShow] = React.useState(false)
    const onSubmit = () => {
        console.log('Submiting...')
        setShow(false)
    }

    return (
        <div className="App">
            <h1>Hello World</h1>
            <button onClick={() => setShow(true)}>Show Modal</button>
            <Modal show={show} title="Modal Title" onSubmit={() => onSubmit()} onClose={() => setShow(false)}>
                <p>This is modal content</p>
            </Modal>
        </div>
    )
}

export default App
