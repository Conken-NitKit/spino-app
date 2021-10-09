import React from "react"
import styled from "styled-components"
import { ReactNode } from "react"
import { useRecoilValue } from "recoil"
import { themeState } from "../atoms"

type Props = {
    children: ReactNode;
}

const Container = styled.div`
    background-color: ${({ theme }) => theme.backgroundCoror };
    color: ${({ theme }) => theme.color}; 
    width: 100vw;
    height: 100vh;
`

export const Wrapper:React.VFC<Props> = ({ children }) => {
    const theme = useRecoilValue(themeState)
    return <Container theme={theme} >{children}</Container>
}