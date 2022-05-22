import { useState } from "react";
import StoryBookExampleComponent from "./StoryBookExampleComponent";

export default {
  title: "Example component",
  component: StoryBookExampleComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

//cia aprasomas sablonas kaip bus atvaizduojamas komponentas:
//propsus paduodame i f-ja kaip argumentus (args) visus iskart arba pavieniuis(uzkomentuotos eilutes)
const Template = (args) => {
  // const Template = ({color, backGround}}) => {
  return (
    <div>
      <StoryBookExampleComponent {...args} />
      {/* <StoryBookExampleComponent color={color} backgroundColor={backgroundColor} /> */}
    </div>
  );
};

//paduodamos skirtingos argumentu kombinacijos storiams, kurie naudoja ta sablona:
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Labas",
  color: "red",
  backgroundColor: "lightblue",
};

export const Labas = Template.bind({});
Labas.args = {
  fontSize: "50px",
  fontWeight: "900",
  textAlign: "center",
  backgroundColor: "lightblue",
};

//reusing previous story's args in another
export const DarVienas = Template.bind({});
DarVienas.args = {
  ...Primary.args,
  fontSize: "50px",
  fontWeight: "900",
  textAlign: "center",
  backgroundColor: "lightblue",
};

//modifikuojamas vienas komponento elementas(footer)
const TemplateAspect1 = (args) => (
  <StoryBookExampleComponent {...args}>
    <footer>{args.footer}</footer>
  </StoryBookExampleComponent>
);

export const CustomFooter = TemplateAspect1.bind({});
CustomFooter.args = {
  footer: "Built with Storybook- args modified aspect of component",
};

//neveikia :(
export const PrimarySecondary = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState("Secondary");
  const [bgColor, setBgColor] = useState("pink");
  const [isPrimary, setIsPrimary] = useState(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue("Primary");
      setBgColor("green");
    }
  };
  return (
    <StoryBookExampleComponent
      bgColor={bgColor}
      primary={isPrimary}
      onChange={handleOnChange}
    >
      {value}
    </StoryBookExampleComponent>
  );
};
