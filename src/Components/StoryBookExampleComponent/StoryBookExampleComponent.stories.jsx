import { useState } from 'react'
import StoryBookExampleComponent from './StoryBookExampleComponent'

export default {
    title: 'Example component',
    component: StoryBookExampleComponent
}

// cia aprasomas sablonas kaip bus atvaizduojamas komponentas:
// propsus paduodame i f-ja kaip argumentus (args) visus iskart arba pavieniuis(uzkomentuotos eilutes)
const Template = ({
    primary, label, color, backgroundColor, padding, fontSize, fontWeight, textAlign, margin, footer, name
}) => (
    <div>
        <StoryBookExampleComponent {...{
            primary, label, color, backgroundColor, padding, fontSize, fontWeight, textAlign, margin, footer, name
        }}
        />
    </div>
)

// paduodamos skirtingos argumentu kombinacijos storiams, kurie naudoja ta sablona:
export const Arguments = Template.bind({})
Arguments.args = {
    primary: true,
    label: 'Laba diena',
    color: 'yellow',
    backgroundColor: 'black',
    padding: '15px'
}

export const Primary = Template.bind({})
Primary.args = {
    primary: true,
    label: 'Labas',
    color: 'red'
}

export const Labas = Template.bind({})
Labas.args = {
    fontSize: '50px',
    fontWeight: '900',
    textAlign: 'right',
    backgroundColor: 'green'
}

// naudojami dekoratoriai
export const Decorators = Template.bind({})
Decorators.args = {
    ...Arguments.args
}
Decorators.decorators = [
    (Story) => (
        <div
            style={{
                fontSize: '50px',
                fontWeight: '900',
                textAlign: 'center',
                backgroundColor: 'green',
                margin: '15px'
            }}
        >
            <StoryBookExampleComponent />
        </div>
    )
]

// reusing previous story's args in another
export const DarVienas = Template.bind({})
DarVienas.args = {
    ...Primary.args,
    fontSize: '30px',
    textAlign: 'center',
    backgroundColor: 'grey'
}

// modifikuojamas vienas komponento elementas(footer)
const TemplateAspect1 = ({ footer }) => (
    <StoryBookExampleComponent {...{ footer }}>
        <footer>{footer.footer}</footer>
    </StoryBookExampleComponent>
)

export const CustomFooter = TemplateAspect1.bind({})
CustomFooter.args = {
    footer: 'Built with Storybook- args modified aspect of component'
}

// naudojamas hookas 'useState'
export const PrimarySecondary = ({
    primary,
    label,
    name,
    backgroundColor,
    color
}) => {
    // Sets the hooks for both the label and primary props
    const [value, setValue] = useState('Secondary')
    const [isPrimary, setIsPrimary] = useState(false)

    // Sets a click handler to change the label's value
    const handleOnChange = () => {
        if (!isPrimary) {
            setIsPrimary(true)
            setValue('Primary')
        }
    }

    return (
        <StoryBookExampleComponent
            handleOnChange={handleOnChange}
            label={value}
            {...{
                name,
                primary: isPrimary,
                backgroundColor,
                color
            }}
        />
    )
}
PrimarySecondary.args = {
    primary: true,
    label: 'Primary',
    name: 'I am mister button',
    backgroundColor: 'black',
    color: 'yellow'
}
