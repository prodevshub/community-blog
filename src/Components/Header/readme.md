# How to use Header Component

While installing Header component, please, open app.scss file where you'll find next code:

<code>
.sticky + main {
    padding-top: 150px;
    @media screen and (max-width: 992px) {
        padding-top: 130px;
      }
    @media screen and (max-width: 576px) {
    padding-top: 100px;
      }
}
</code>
This padding style is assigned to next page block, going after Header component. If this block or component has another class name, please, replace  'main' in app.sccs to its class name.

Example of Header component React implementation:

```

```

import React from 'react'
import './App.scss'
import Header from './Components/Header'
const App = () => (
    <>

    `<Header />`
        `<main>`
            `<h1>`Hello World`</h1>`
        `</main>`
    </>

)

export default App
