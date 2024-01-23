import type { Meta, StoryObj } from '@storybook/react';

import Error from './Error';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Error> = {
  component: Error,
};

export default meta;
type Story = StoryObj<typeof Error>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};