/* eslint-disable react/jsx-props-no-spreading */
import { React } from 'react'
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

export const HeaderStory = Template.bind({})
HeaderStory.args = {
    fontSize: '2rem',
    color: 'white',
    height: '55px'
}
