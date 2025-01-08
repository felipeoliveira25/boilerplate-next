import { Meta, StoryObj } from '@storybook/react'
import { Main } from '.'

export default {
    title: 'Main',
    component: Main,
    args: {
        title: "title default",
        description: "desc default"
    },
    parameters: {
        layout: 'fullscreen'
    }
} as Meta

export const Default: StoryObj = {}

export const Red: StoryObj = {
    args: {
        title: 'title basic',
        description: 'desc basic',
        background: "#e61a1a"
    }
}

export const Black: StoryObj = {
    args: {
        title: "Black Story Title",
        description: "Black Story Desc",
        background: "#000"
    },
    
}