import React from 'react'
import './App.css'
import Modal from './Components/Modal'

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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quam, nulla suscipit error sit reiciendis mollitia incidunt obcaecati dignissimos. </p>
            </Modal>
        </div>
    )
}

export default App
