/* eslint-disable react/jsx-props-no-spreading */
import { React, useState } from 'react'
import Header from './Header'

export default {
    title: 'Header component',
    component: Header
}

// cia aprasomas sablonas kaip bus atvaizduojamas komponentas:
// propsus paduodame i f-ja kaip argumentus (args) visus iskart arba pavieniuis(uzkomentuotos eilutes)
const Template = (args) => (
    <div>
        <Header {...args} />
    </div>
)

// paduodamos skirtingos argumentu kombinacijos storiams, kurie naudoja ta sablona:
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
