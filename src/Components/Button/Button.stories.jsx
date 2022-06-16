import { React } from 'react'
import Button from './Button'

export default {
    title: 'Button component',
    component: Button
}

const Template = (args) => {
    const {
        className, onClick, children, ariaLabel
    } = args
    return (
        <Button {...{ className, onClick, ariaLabel }}>{children}</Button>
    )
}

export const Arguments = Template.bind({})
Arguments.args = {
    className: 'cust-btn cust-btn-primary',
    onClick: () => alert('Button clicked'),
    children: 'I am a button',
    ariaLabel: 'This is a button'
}
