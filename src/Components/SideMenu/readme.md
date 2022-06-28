# How to use SideMenu component

Example in Home.jsx component:

`import { useState } from'react'`

`import Buttonfrom'../Components/Button'`

`import SideMenufrom'../Components/SideMenu/SideMenu'`

`const Home= () => {`

 `   const [show, setShow] =useState(false)`

    `return (`

    `<h2>`

    `<Button onClick={() =>setShow((e) =>!e)}> Open side menu</Button>`

    `<SideMenu{...{ show, setShow }}>This is side menu</SideMenu>`

    `</h2>`

  `  )`

`}`

`export default Home`
