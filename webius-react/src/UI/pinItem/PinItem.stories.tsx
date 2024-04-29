import type {Meta, StoryObj} from '@storybook/react';
import PinItem from "@/UI/pinItem/PinItem.tsx";

const meta: Meta<typeof PinItem> = {
    component: PinItem,
    argTypes: {
        fill: {
            options: [true, false],
        },
    },
};

export default meta;

type Story = StoryObj<typeof PinItem>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const PinItemFill: Story = {
    name: 'PinItemFill',
    render: (args) => {
        //👇 Assigns the function result to a variable

        return <PinItem {...args}/> ;
    },
    args: {
        fill: true,
    },
};