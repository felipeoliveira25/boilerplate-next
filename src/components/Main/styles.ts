'use client'

import styled from "styled-components"

interface MainProps {
    background?: string
}

export const Wrapper = styled.main<MainProps>`
    background-color: ${({background}) => background || 'blue'};
    width: 100%;
    height: 100%;
`

export const Title = styled.h1`
    color: #b0b0b0;
`

export const Description = styled.span`
    color: #b2b2b2;
`