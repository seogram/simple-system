import type { Meta, StoryObj } from '@storybook/react';

import Loading from './Loading';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Loading> = {
  component: Loading,
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};