import { React, useState } from 'react'
import Modal from './Modal'

export default {
    title: 'Modal component',
    component: Modal
}

const Template = (args) => {
    const [show, setShow] = useState(false)
    const onSubmit = () => {
        alert('Modal sumbmit button clicked')
        setShow(false)
    }

    const { title, children } = args

    return (
        <div className="App">
            <h1>Modal demo</h1>
            <button onClick={() => setShow(true)}>Show Modal</button>

            <Modal
                {...{ show, title, onSubmit }}
                onClose={() => setShow(false)}
            >
                <p>
                    {children}
                    {' '}
                </p>
            </Modal>
        </div>
    )
}

export const Arguments = Template.bind({})
Arguments.args = {
    title: 'My Modal title',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere expedita corporis, veniam obcaecati ipsa esse molestias sapiente, voluptatibus laborum architecto! Nihil?'

}
