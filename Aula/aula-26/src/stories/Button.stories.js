import Button from '../components/Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } }
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Click me',
  variant: 'primary',
  size: 'md'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Click me',
  variant: 'secondary',
  size: 'md'
}