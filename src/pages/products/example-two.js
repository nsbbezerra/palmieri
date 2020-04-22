import React, { useEffect, useState } from 'react';
import { Container, Banner, Content, Spaced, TextContainer, SubTitle, Description } from '../../styles/styles';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/style.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { FaCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../animations/loading-one.json';

import banner from './assets/banner-two.png';
import gola from './assets/gola.jpg';
import fundo from './assets/fundo.jpg';
import meio from './assets/meio.jpg';
import depoimento from './assets/depoimento.png';
import portifolio from './assets/tshirt-three.png';
import tshirt from './assets/tshirt.png';

import breakpointsConfig from '../../configs/sliderConfig';

export default function ExampleTwo() {

    const [loading, setLoading] = useState(true);

    const { pathname } = useLocation();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        setTimeout(function finhishLoading() {
            setLoading(false);
        }, 3000);
    }, []);

    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        autoplay: true,
        dots: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <MdKeyboardArrowRight color='#666' size={'5em'} />,
        prevArrow: <MdKeyboardArrowLeft color='#666' size={'5em'} />,
        responsive: breakpointsConfig
    };
    const settings2 = {
        dots: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <MdKeyboardArrowRight color='#666' size={'5em'} />,
        prevArrow: <MdKeyboardArrowLeft color='#666' size={'5em'} />,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 685,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    return (
        <Container>
            {loading === true ? (
                <>
                    <Lottie options={defaultOptions}
                        width={'40%'}
                    />
                    <h1 style={{ color: '#666', width: '100%', textAlign: 'center', fontSize: '5rem', fontStyle: 'italic', fontWeight: 500, marginBottom: 100 }}>Carregando Conteúdo!</h1>
                </>
            ) : (
                    <>
                        <Banner src={banner} alt='Banner Produtos Palmieri Uniformes' />
                        <Spaced />
                        <Content>
                            <Slider {...settings}>
                                <div className="card-product-two">
                                    <div className="card-header">
                                        GOLA
                        </div>
                                    <img src={gola} alt="gola" className="card-product-img" />
                                    <div className="card-content">
                                        Uniformes para ciclismo são em grande maioria feito em malhas leves, as melhores dentre elas são: Poliamida com fator solar, DriFit Poliester, helanca ou cachare.
                        </div>
                                </div>
                                <div className="card-product-two">
                                    <div className="card-header">
                                        ESTAMPA
                        </div>
                                    <img src={meio} alt="gola" className="card-product-img" />
                                    <div className="card-content">
                                        Uniformes para ciclismo são em grande maioria feito em malhas leves, as melhores dentre elas são: Poliamida com fator solar, DriFit Poliester, helanca ou cachare.
                        </div>
                                </div>
                                <div className="card-product-two">
                                    <div className="card-header">
                                        MALHAS
                        </div>
                                    <img src={fundo} alt="gola" className="card-product-img" />
                                    <div className="card-content">
                                        Uniformes para ciclismo são em grande maioria feito em malhas leves, as melhores dentre elas são: Poliamida com fator solar, DriFit Poliester, helanca ou cachare.
                        </div>
                                </div>
                                <div className="card-product-two">
                                    <div className="card-header">
                                        ACABAMENTOS
                        </div>
                                    <img src={gola} alt="gola" className="card-product-img" />
                                    <div className="card-content">
                                        Uniformes para ciclismo são em grande maioria feito em malhas leves, as melhores dentre elas são: Poliamida com fator solar, DriFit Poliester, helanca ou cachare.
                        </div>
                                </div>
                            </Slider>
                        </Content>
                        <Spaced />

                        <div className="container-tecido">
                            <div className="content-tecido-one">
                                <h1 className='title-master-tecido'>Opções de Malhas</h1>
                                <span className='title-tecido'><FaCircle style={{ marginRight: '15px', fontSize: '3.5rem' }} /> Malha Pv Anti Piling </span>
                                <div className="container-info-tecido">
                                    <span className='info-tecido'>Malha Pv Anti Piling é entre todas a mais usada tanto para empresas
                                    quanto principalmente para eventos promocionais por conta de sua durabilidade. Ela
                                    é uma malha que não desbota a sua cor facilmente e por ser Anti-Pilling
                                    foi feita para evitar bolinhas após a lavagem, sua composição é de 67%
                                    poliéster e 33% viscose.

                                    Essa malha não é muito transparente e fica muito bonita com
                                    diversos tipos de estampas

                                    Se estiver precisando de uma malha para uma grande
                                    quantidade de pessoas e que seja confortavel e bem fresca
                                    para usar, essa malha pode ser a sua melhor opção.</span>
                                    <img src={tshirt} alt="tecido" className="img-tecido" />
                                </div>
                            </div>
                            <div className="content-tecido">
                                <span className='title-tecido'><FaCircle style={{ marginRight: '15px', fontSize: '3.5rem' }} /> Malha 100% Algodão Penteada Fio 30/1</span>
                                <div className="container-info-tecido">
                                    <span className='info-tecido'>Na malha Dry Fit é malha leve e agradável de vestir, muito usado e eventos com atividades físicas

                                    A malha Dry fit tem se tornado muito comum para a fabricação de uniformes. Como é usado
                                    diariamente e por longos períodos, é uma boa opção principalmente em ambientes mais quentes
                                    que tendem a fazer que o colaborador transpire mais
                                    </span>
                                </div>
                            </div>
                            <div className="content-tecido">
                                <span className='title-tecido'><FaCircle style={{ marginRight: '15px', fontSize: '3.5rem' }} /> Piquet</span>
                            </div>
                            <div className="content-tecido">
                                <span className='title-tecido'><FaCircle style={{ marginRight: '15px', fontSize: '3.5rem' }} /> Helanca</span>
                            </div>
                            <div className="content-tecido">
                                <span className='title-tecido'><FaCircle style={{ marginRight: '15px', fontSize: '3.5rem' }} /> Helanquinha</span>
                            </div>
                            <div className="content-tecido">
                                <span className='title-tecido'><FaCircle style={{ marginRight: '15px', fontSize: '3.5rem' }} /> Malha PP</span>
                            </div>
                            <div className="content-tecido">
                                <span className='title-tecido'><FaCircle style={{ marginRight: '15px', fontSize: '3.5rem' }} /> Poliamida</span>
                            </div>
                        </div>

                        <div className="depoiments">
                            <h2 className='title-depoiments'>DEPOIMENTOS</h2>
                            <Slider {...settings2}>
                                <img src={depoimento} alt='Depoimentos' className='img-depoimento' />
                                <img src={depoimento} alt='Depoimentos' className='img-depoimento' />
                                <img src={depoimento} alt='Depoimentos' className='img-depoimento' />
                                <img src={depoimento} alt='Depoimentos' className='img-depoimento' />
                            </Slider>
                        </div>
                        <div className="portifolio">
                            <TextContainer>
                                <SubTitle>Portifolio de Artes</SubTitle>
                                <Description>Nosso Portifólio de Artes</Description>
                            </TextContainer>
                            <Banner />
                            <Slider {...settings2}>
                                <img src={portifolio} alt='portifolios' className='img-portifolio' />
                                <img src={portifolio} alt='portifolios' className='img-portifolio' />
                                <img src={portifolio} alt='portifolios' className='img-portifolio' />
                                <img src={portifolio} alt='portifolios' className='img-portifolio' />
                            </Slider>
                            <div className="btn-container">
                                <button className='btn-catalog'>CLIQUE AQUI E VEJA NOSSO CATÁLOGO</button>
                            </div>
                        </div>
                    </>
                )}
        </Container>
    );
}