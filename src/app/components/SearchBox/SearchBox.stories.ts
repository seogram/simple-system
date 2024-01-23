import type { Meta, StoryObj } from '@storybook/react';

import SearchBox from './SearchBox';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SearchBox> = {
  component: SearchBox,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};