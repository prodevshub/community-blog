# How to use Modal component

Example of Modal component in React:

`import React from 'react'`

` import Modal from './Components/Modal'`

`const App = () => {     `

`	const [show, setShow] = React.useState(false)`

`	const onSubmit = () => { setShow(false) }`

    `return (`
        `<div className="App">`
            `<h1>Hello World``</h1>`
            `<button onClick={() => setShow(true)}>Show Modal</button>`
            `<Modal `

`		show={show} `

`		title="Modal title" `

`		onSubmit={onSubmit} `

`		onClose={() => setShow(false)}`

`	>`
                `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quam, nulla suscipit error sit reiciendis mollitia incidunt obcaecati dignissimos.` `</p>`
            `</Modal>`
        `</div>`
   ` )`
`}`

`export default App`
