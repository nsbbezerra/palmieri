import React from 'react';
import './style.css';
import { Container, Spaced } from '../../styles/styles';
import animationData from '../../animations/404.json';
import Lottie from 'react-lottie';

export default function NotFound() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Container>
            <Spaced />
            <Spaced />
            <Lottie options={defaultOptions}
                width={'40%'}
            />
            <h1 className='not-found-title'>Página Não Encontrada!</h1>
        </Container>
    );
}