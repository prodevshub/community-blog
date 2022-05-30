# How to use Button Component

Button styles are modified Bootstrap v4.3.1 (https://getbootstrap.com/)

Copyright 2011-2019 The Bootstrap Authors

Copyright 2011-2019 Twitter, Inc.

Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)

---

1. To use you can go to https://getbootstrap.com/docs/4.3/components/buttons/ for button style example.
2. Add prefix "cust-" to the standart Bootstrap Buttons style name. For example if you need red button use ` cust-btn cust-btn-danger` button style name

---

This is example in React:

`import Button from '../Button'`

`return (         `

    `<Button `

`	type="button" `

`	className="cust-btn cust-btn-secondary" `

`	onClick={() => handleClose(onClose)} `

`	ariaLabel="Close">`

    `Close`
    `</Button>`

    `)`
