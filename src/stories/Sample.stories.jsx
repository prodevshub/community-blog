import {Sample} from "../Components/Sample"

export default {
    title: "Sample component",
    component: Sample,
    argTypes: {
        backgroundColor: { control: 'color' },
      },
}

const Template = (args) => <Sample {...args} />;

// export const FirstStory = {
//     args: {
//     },
//   };

  export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'logo',
};






















//TUOJ  GRĮŠIU ;)












