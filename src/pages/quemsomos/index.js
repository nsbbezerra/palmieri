import React, { useEffect } from 'react';
import { Container, Content, Banner, Spaced } from '../../styles/styles';
import './style/style.css';
import { useLocation } from 'react-router-dom';

import banner from './assets/banner.png';
import icone from '../../assets/icone.svg';

export default function QuemSomos() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    },[pathname]);
    return (
        <Container>
            <Banner alt='Banner' src={banner} />
            <Spaced />
            <Content>
                <ul className='quem-list'>
                    <li className='quem-list-item'>
                        <div className="quem-left">
                            <img src={icone} alt="quem" className="quem-img" />
                        </div>
                        <div className="quem-right">
                            <span className="quem-description">
                                A Palmieri Uniformes a menos de um ano se localiza na cidade de Pedro Afonso - TO vindo de Palmas - TO. Somos uma empresa com visão de crescimento buscando sempre novidades e qualidade para nossos cliente, temos nos destacados com fabricação de uniformes para toda o brasil através da internet e estamos comprometidos não apenas com fabricar camisetas, mas sim levar a melhor experiência para todos fazem camisetas conosco. A empresa está no mercado a mais de 4 anos e tem desenvolvidos ótimos produtos na região e agradando muitas pessoas, nosso trabalho tem sido reconhecido cada vez mais, o estado do tocantins ha muita concorrência e estamos firmes e fortes até hoje.
                            </span>
                        </div>
                    </li>
                    <li className='quem-list-item'>
                        <div className="quem-left">
                            <span className="quem-description">
                                Atualmente nosso produtos mais vendidos estão  voltados para eventos promocionais, empresas e uniformes escolares, feitos em malhas com 100% da produção feita no Brasil e ótima qualidade, temos uma equipe de costeiras que estão a mais de 10 anos na profissão com acabamento exelente em nossas peças, temos serigrafos que desemvelmen uma produção em larga escala, fazendo diversidade de aplicação nas peças, nossos profissionais em artes graficas estão prontos proporcionar lindas artes para nossos clientes, contamos também com grupo de consultores que ajuda o cliente a escolher a melhor peça para seu evento, empresa ou esporte.
                            </span>
                        </div>
                        <div className="quem-right">
                            <img src={icone} alt="quem" className="quem-img" />
                        </div>
                    </li>
                    <li className='quem-list-item'>
                        <div className="quem-left">
                            <img src={icone} alt="quem" className="quem-img" />
                        </div>
                        <div className="quem-right">
                            <span className="quem-description">
                                Fazemos as peças para nossos cliente assim como se fesse para nós mesmo, temos temor a palavra de Deus e trabalhamos acima de tuda para que o reino de Deus venha crescer na Terra e pedimos a Deus para que cada camiseta nossa sendo usada em qualquer lugar seja motivo de benção na vida de quem estiver usando.
                            </span>
                        </div>
                    </li>
                </ul>
            </Content>
            <Spaced />
        </Container>
    )
}