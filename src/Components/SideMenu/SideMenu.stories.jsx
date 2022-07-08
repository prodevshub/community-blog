import { React, useState } from 'react'
import SideMenu from './SideMenu'

export default {
    title: 'SideMenu component',
    component: SideMenu,
    argTypes: {
        side: {
            options: ['left', 'right'],
            control: { type: 'radio' }
        },
        show: {
            options: [false, true],
            control: { type: 'radio' }
        }

    }
}

const Template = ({ show, side, menuContent }) => {
    // eslint-disable-next-line prefer-const
    let [showState, setShowState] = useState(show)
    showState = show
    return (
        <SideMenu show={showState} setShow={setShowState} side={side}>
            {menuContent}
        </SideMenu>
    )
}

export const Arguments = Template.bind({})
Arguments.args = {
    menuContent: 'This is side menu'
}
