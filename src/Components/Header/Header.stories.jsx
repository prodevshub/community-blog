import { React, useState } from 'react'
import Header from './Header'

export default {
    title: 'Header component',
    component: Header
}

const Template = (args) => (
    <div>
        <Header {...args} />
    </div>
)

export const Arguments = Template.bind({})
Arguments.args = {
    primary: true,
    fontSize: '2rem',
    fontFamily: 'serif',
    color: 'white',
    paddingTop: '1%',
    paddingBottom: '5%',
    height: '55px',
    width: '55px'
}
