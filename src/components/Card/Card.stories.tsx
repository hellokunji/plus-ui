/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';
import Typography from '../Typography';

export default {
  title: 'Atoms/Card',
  component: Card,
  args: {
    label: 'Card',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <>
      <br />
      <br />
      <Typography label="Card content will be here" />
      <br />
      <br />
    </>
  </Card>
);

export const Default = Template.bind({});
