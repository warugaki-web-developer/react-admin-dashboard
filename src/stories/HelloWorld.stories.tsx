import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HelloWorld from '../components/HelloWorld';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/HelloWorld',
  component: HelloWorld,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HelloWorld>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelloWorld> = (args) => (
  <HelloWorld {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  text: 'World',
};
