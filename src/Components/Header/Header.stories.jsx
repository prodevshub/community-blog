/* eslint-disable react/jsx-props-no-spreading */
import { React, useState } from 'react'
import Header from './Header'

export default {
    title: 'Header component',
    component: Header
    // argTypes: {
    //   background: { control: "color" },
    //   active: { control: 'boolean' }
    // },
}

// cia aprasomas sablonas kaip bus atvaizduojamas komponentas:
// propsus paduodame i f-ja kaip argumentus (args) visus iskart arba pavieniuis(uzkomentuotos eilutes)
const Template = (args) => (
// const Template = ({color, background}}) => {

    <div>
        <Header {...args} />
        {/* <StoryBookExampleComponent color={color} background={background} /> */}
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
// naudojami dekoratoriai
// export const Decorators = Template.bind({})
// Decorators.decorators = [
//     (Story) => (
//         <div style={{
//             fontSize: '50px',
//             fontWeight: '900',
//             textAlign: 'right',
//             backgroundColor: 'green',
//             margin: '15px'
//         }}
//         >
//             <Header />
//         </div>
//     )
// ]

// reusing previous story's args in another
// export const Lucky = Template.bind({})
// Lucky.args = {
//     ...Arguments.args,
//     fontSize: '30px',
//     textAlign: 'center',
//     backgroundColor: 'grey'
// }

// modifikuojamas vienas komponento elementas(footer)
// const TemplateAspect1 = (args) => (
//     <Header {...args}>
//         <footer>{args.footer}</footer>
//     </Header>
// )

// export const CustomFooter = TemplateAspect1.bind({})
// CustomFooter.args = {
//     footer: 'Built with Storybook- args modified aspect of component'
// }

// naudojamas hookas "useState"
// export const PrimarySecondary = ({
//     primary, label, name, backgroundColor, color
// }) => {
//     // Sets the hooks for both the label and primary props
//     const [value, setValue] = useState('Secondary')
//     const [isPrimary, setIsPrimary] = useState(false)

//     // Sets a click handler to change the label's value
//     const handleOnChange = () => {
//         if (!isPrimary) {
//             setIsPrimary(true)
//             setValue('Primary')
//         }
//     }
//     return (
//         <Header
//             handleOnChange={handleOnChange}
//             label={value}
//             {...{
//                 name,
//                 primary: isPrimary,
//                 backgroundColor,
//                 color
//             }}
//         />
//     )
// }
// PrimarySecondary.args = {
//     primary: true,
//     label: 'Primary',
//     name: 'I am mister button',
//     backgroundColor: 'black',
//     color: 'yellow'
// }
