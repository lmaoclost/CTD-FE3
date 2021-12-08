import Button from "../components/Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
  label: "Press Me",
  size: "md",
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
  label: "Press Me",
  size: "md",
}

export const Large = Template.bind({})
Large.args = {
  variant: "primary",
  label: "Press Me",
  size: "lg",
}