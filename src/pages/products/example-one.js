import React, { useEffect, useState } from 'react';
import { Container, Banner, Card, CardImage, CardDescription, CardTitle, Content, Spaced, Jumbotron, TextContainer, SubTitle, Description } from '../../styles/styles';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/style.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../animations/loading-one.json';

import banner from './assets/banner.png';
import tshirt from './assets/tshirt.png';
import tshirtOne from './assets/tshirt-two.png';
import detailsOne from './assets/datails-one.png';
import detailsTwo from './assets/datails-two.png';
import depoimento from './assets/depoimento.png';
import portifolio from './assets/poti-art-one.png';

import breakpointsConfig from '../../configs/sliderConfig';

export default function ExampleOne() {

    const [loading, setLoading] = useState(true);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

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
                        width={'50%'}
                        height={500}
                    />
                    <h1 style={{ color: '#666', width: '100%', textAlign: 'center', fontSize: '5rem', fontStyle: 'italic', fontWeight: 500, marginBottom: 100 }}>Carregando Conteúdo!</h1>
                </>
            ) : (
                    <>
                        <Banner src={banner} alt='Banner Produtos Palmieri Uniformes' />
                        <Spaced />
                        <Content>
                            <Slider {...settings}>
                                <Card>
                                    <CardImage src={tshirt} alt='Camiseta Palmieri' />
                                    <CardTitle>CAMISETAS POLO</CardTitle>
                                    <CardDescription>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections</CardDescription>
                                </Card>
                                <Card>
                                    <CardImage src={tshirtOne} alt='Camiseta Palmieri' />
                                    <CardTitle>CAMISETAS POLO</CardTitle>
                                    <CardDescription>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections</CardDescription>
                                </Card>
                                <Card>
                                    <CardImage src={tshirt} alt='Camiseta Palmieri' />
                                    <CardTitle>CAMISETAS POLO</CardTitle>
                                    <CardDescription>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections</CardDescription>
                                </Card>
                                <Card>
                                    <CardImage src={tshirtOne} alt='Camiseta Palmieri' />
                                    <CardTitle>CAMISETAS POLO</CardTitle>
                                    <CardDescription>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections</CardDescription>
                                </Card>
                                <Card>
                                    <CardImage src={tshirt} alt='Camiseta Palmieri' />
                                    <CardTitle>CAMISETAS POLO</CardTitle>
                                    <CardDescription>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections</CardDescription>
                                </Card>
                                <Card>
                                    <CardImage src={tshirtOne} alt='Camiseta Palmieri' />
                                    <CardTitle>CAMISETAS POLO</CardTitle>
                                    <CardDescription>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections</CardDescription>
                                </Card>
                            </Slider>
                        </Content>
                        <Spaced />
                        <Jumbotron>
                            <TextContainer>
                                <SubTitle>Veja todos os detalhes para que seu uniforme seja...</SubTitle>
                            </TextContainer>
                            <div className="details-container">
                                <div className="photo-left">
                                    <img src={detailsOne} alt="Detalhes Palmieir Uniformes" className="img-photo-left" />
                                </div>
                                <div className="photo-right">
                                    <img src={detailsTwo} alt="Detalhes Palmieir Uniformes" className="img-photo-right" />
                                </div>
                            </div>
                        </Jumbotron>
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