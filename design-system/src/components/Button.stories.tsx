// filepath: /Users/linikersilva/projetos/poc-ds/src/components/Button.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button/Button';


export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click me',
};