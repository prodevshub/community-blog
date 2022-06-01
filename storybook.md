# Install:

 - Write in command line*:

```javascript
npx storybook init
```

*```storybook init``` is not made for empty projects. Create React App before installation.

- Check that everything worked by running**:

```javascript
npm run storybook
```

**don’t forget to run on the directory you are working 

```javascript
cd project-name
```

- If it doesn’t work, try this troubleshooting command and then run again:

#### Troubleshooting:

Add the ```--type react``` flag to the installation command to set up Storybook manually:

```javascript
npx sb init --type react
```

# Write stories:

- A story is a function that describes how to render a component (returns a component’s state given a set of arguments). You can have multiple stories per component.

- Storybook uses the generic term arguments (args for short) when talking about React’s ```props```.

- A component’s stories are defined in a story file that lives alongside the component file:This is component file: ```Component.jsx```

- This is component story file: ```Component.stories.jsx```

- In ```src``` folder create ```Components``` folder. In this folder create another folder with the name of component. All related files to this component go here.

- Stories are defined according to the Component Story Format (CSF). The key ingredients are the default export that describes the component, and named exports that describe the stories.

### DEFAULT export:
```javascript
import React from 'react'; 
import { Component } from './Component'; 

export default { 
title: 'Component', 
component: Component, 
};
```
### NAMED export:
```javascript
export const Primary = () => <Component primary> </Component>;
```

## Write story using args:

- “Args” are Storybook’s mechanism for defining those arguments in a single JavaScript object. Args can be used to dynamically change props, slots, styles, inputs, etc. It allows Storybook and its addons to live edit components. You do not need to modify your underlying component code to use args.

- We create a "template" of how args map to rendering:
- 
```javascript
const Template = (args) => <Component {...args} />;
```

- Each story then reuses that template:

```javascript
export const Primary = Template.bind({});
Primary.args = { 
backgroundColor: '#ff0', 
label: 'Component' 
};

export const Secondary = Template.bind({});
Secondary.args = {
 ...Primary.args, 
 label: 'Another Component',
 color: 'red'
 };
```
- To make story work, go to component file and pass arguments:

```javascript
import React from 'react';

function Component({backgroundColor, color, label}) {

  return (
    <>
      <h1 style={{backgroundColor, color, label}}>Sample component in community blog</h1>
    </>
  );
}

export default Component;
```

- You can also define args at the component level; they will apply to all the component's stories unless you overwrite them. To do so, use the ```args``` key on the ```default``` CSF export:

```javascript
import React from 'react'; 
import { Component } from './Component'; 

export default { 
title: 'Component', 
component: Component, 
args: {
    font-size: '30px'
  }
};
```

## Write story using decorators:

- A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators to augment your stories with extra rendering or gather details about how your story renders.

- When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.

- For instance, if a component runs right up to its edges, you might want to space it inside Storybook. Use a decorator to add spacing for all stories of the component.

- To define a decorator for a single story, use the ```decorators``` key on a named export:

```javascript
export const Primary = Template.bind({});
Primary.decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  ),
];
```