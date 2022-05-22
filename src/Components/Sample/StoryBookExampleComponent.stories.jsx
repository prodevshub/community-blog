import React from "react";
import StoryBookExampleComponent from "./StoryBookExampleComponent";


export default {
title: "Example component",
component: StoryBookExampleComponent,
argTypes: {
    backgroundColor: { control: 'color' },
  },

}

const Template = (args) => <StoryBookExampleComponent {...args} />;

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












