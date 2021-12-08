import Header from '../components/Header';

export default {
  title: 'components/Header',
  component: Header
}

const Template = args => <Header {...args} />

export const Dark = Template.bind({})
Dark.args = {
  bg: 'dark',
  variant: 'dark'
}

export const Light = Template.bind({})
Light.args = {
  bg: 'light',
  variant: 'light'
}