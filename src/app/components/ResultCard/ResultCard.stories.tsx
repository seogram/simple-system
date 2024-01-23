import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import ResultCard from './ResultCard';

const meta: Meta<typeof ResultCard> = {
  component: ResultCard,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
            <Story />
      </QueryClientProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ResultCard>;

export const FirstStory: Story = {
  args: {
    searchTerm : "admin"
  },
};