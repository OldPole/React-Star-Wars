import UiButton from "./UiButton"

export default {
    title: 'Ui-Kit/UiButton',
    component: UiButton
}

const Template = (args) => <UiButton {...args}/>

const props = {
    text: 'Hello',
    onClick: () => console.log('Click'),
    isDisabled: false,
    theme: 'dark',
    classes: '',
}

export const Dark = Template.bind({});
Dark.args = {
    ...props,
    theme: 'dark'
}

export const Light = Template.bind({});
Light.args = {
    ...props,
    theme: 'light'
}

export const Disabled = Template.bind({});
Disabled.args = {
    ...props,
    isDisabled: true
}