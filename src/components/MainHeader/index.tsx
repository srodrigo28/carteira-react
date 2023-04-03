import React, { useMemo } from 'react'
import emojis from '../../utils/emojis'
import { Container, Profile, Welcome, UserName } from './styles'
import { Toogle } from '../Toogle'

export function MainHeader() {
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length)
        return emojis[indice]
    }, [])
    return (
        <Container>
            <Toogle />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Sebastião Rodrigo</UserName>
            </Profile>
        </Container>
    )
}