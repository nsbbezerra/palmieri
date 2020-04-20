import React, { useEffect, useState } from 'react';
import { Container, Content, Banner, Spaced } from '../../styles/styles';
import './style/style.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import animationData from '../../animations/loading-one.json';
import Lottie from 'react-lottie';

import banner from './assets/banner.png';
import depoimento from '../products/assets/depoimento.png';
import foto from './assets/photo.jpg';
import icone from '../../assets/icone.svg';
import logo from '../../assets/logo.svg';

export default function Depoimentos() {

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
        dots: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <MdKeyboardArrowRight color='#666' size={'5em'} />,
        prevArrow: <MdKeyboardArrowLeft color='#666' size={'5em'} />,
        responsive: [
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
    const settings2 = {
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        dots: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <MdKeyboardArrowRight color='#666' size={'5em'} />,
        prevArrow: <MdKeyboardArrowLeft color='#666' size={'5em'} />,
        responsive: [
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
                    centerMode: false,
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
                        <Banner alt='banner' src={banner} />
                        <Spaced />
                        <Content>
                            <div className="used-container">
                                <div className="used-item">
                                    <div className="item-img">
                                        <img src={foto} alt="foto" className="img-item-used" />
                                    </div>
                                    <div className="item-desc">
                                        <div className="logo-container-used">
                                            <img src={icone} alt="icone" className="icone-used" />
                                            <img src={logo} alt="logo" className="logo-used" />
                                        </div>
                                        <span className='used-description'>FORMANDOS TERCEIRA TURMA FORMANDOS</span>
                                    </div>
                                </div>
                                <div className="used-item">
                                    <div className="item-img">
                                        <img src={foto} alt="foto" className="img-item-used" />
                                    </div>
                                    <div className="item-desc">
                                        <div className="logo-container-used">
                                            <img src={icone} alt="icone" className="icone-used" />
                                            <img src={logo} alt="logo" className="logo-used" />
                                        </div>
                                        <span className='used-description'>FORMANDOS TERCEIRA TURMA FORMANDOS</span>
                                    </div>
                                </div>
                                <div className="used-item">
                                    <div className="item-img">
                                        <img src={foto} alt="foto" className="img-item-used" />
                                    </div>
                                    <div className="item-desc">
                                        <div className="logo-container-used">
                                            <img src={icone} alt="icone" className="icone-used" />
                                            <img src={logo} alt="logo" className="logo-used" />
                                        </div>
                                        <span className='used-description'>FORMANDOS TERCEIRA TURMA FORMANDOS</span>
                                    </div>
                                </div>
                                <div className="used-item">
                                    <div className="item-img">
                                        <img src={foto} alt="foto" className="img-item-used" />
                                    </div>
                                    <div className="item-desc">
                                        <div className="logo-container-used">
                                            <img src={icone} alt="icone" className="icone-used" />
                                            <img src={logo} alt="logo" className="logo-used" />
                                        </div>
                                        <span className='used-description'>FORMANDOS TERCEIRA TURMA FORMANDOS</span>
                                    </div>
                                </div>
                                <div className="used-item">
                                    <div className="item-img">
                                        <img src={foto} alt="foto" className="img-item-used" />
                                    </div>
                                    <div className="item-desc">
                                        <div className="logo-container-used">
                                            <img src={icone} alt="icone" className="icone-used" />
                                            <img src={logo} alt="logo" className="logo-used" />
                                        </div>
                                        <span className='used-description'>FORMANDOS TERCEIRA TURMA FORMANDOS</span>
                                    </div>
                                </div>
                                <div className="used-item">
                                    <div className="item-img">
                                        <img src={foto} alt="foto" className="img-item-used" />
                                    </div>
                                    <div className="item-desc">
                                        <div className="logo-container-used">
                                            <img src={icone} alt="icone" className="icone-used" />
                                            <img src={logo} alt="logo" className="logo-used" />
                                        </div>
                                        <span className='used-description'>FORMANDOS TERCEIRA TURMA FORMANDOS</span>
                                    </div>
                                </div>
                                <div className="used-item">
                                    <div className="item-img">
                                        <img src={foto} alt="foto" className="img-item-used" />
                                    </div>
                                    <div className="item-desc">
                                        <div className="logo-container-used">
                                            <img src={icone} alt="icone" className="icone-used" />
                                            <img src={logo} alt="logo" className="logo-used" />
                                        </div>
                                        <span className='used-description'>FORMANDOS TERCEIRA TURMA FORMANDOS</span>
                                    </div>
                                </div>
                                <div className="used-item">
                                    <div className="item-img">
                                        <img src={foto} alt="foto" className="img-item-used" />
                                    </div>
                                    <div className="item-desc">
                                        <div className="logo-container-used">
                                            <img src={icone} alt="icone" className="icone-used" />
                                            <img src={logo} alt="logo" className="logo-used" />
                                        </div>
                                        <span className='used-description'>FORMANDOS TERCEIRA TURMA FORMANDOS</span>
                                    </div>
                                </div>
                                <div className="used-item">
                                    <div className="item-img">
                                        <img src={foto} alt="foto" className="img-item-used" />
                                    </div>
                                    <div className="item-desc">
                                        <div className="logo-container-used">
                                            <img src={icone} alt="icone" className="icone-used" />
                                            <img src={logo} alt="logo" className="logo-used" />
                                        </div>
                                        <span className='used-description'>FORMANDOS TERCEIRA TURMA FORMANDOS</span>
                                    </div>
                                </div>
                                <div className="used-item">
                                    <div className="item-img">
                                        <img src={foto} alt="foto" className="img-item-used" />
                                    </div>
                                    <div className="item-desc">
                                        <div className="logo-container-used">
                                            <img src={icone} alt="icone" className="icone-used" />
                                            <img src={logo} alt="logo" className="logo-used" />
                                        </div>
                                        <span className='used-description'>FORMANDOS TERCEIRA TURMA FORMANDOS</span>
                                    </div>
                                </div>
                                <div className="used-item">
                                    <div className="item-img">
                                        <img src={foto} alt="foto" className="img-item-used" />
                                    </div>
                                    <div className="item-desc">
                                        <div className="logo-container-used">
                                            <img src={icone} alt="icone" className="icone-used" />
                                            <img src={logo} alt="logo" className="logo-used" />
                                        </div>
                                        <span className='used-description'>FORMANDOS TERCEIRA TURMA FORMANDOS</span>
                                    </div>
                                </div>
                            </div>
                        </Content>
                        <div className="video-content">
                            <h2 className='title-depoimentos'>DEPOIMENTOS</h2>
                            <Slider {...settings2} className='videos'>
                                <div className="video-container">
                                    <iframe className='youtube-video' title='youtube' width="100%" height="215" src="https://www.youtube.com/embed/6W7l2unh6-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="video-container">
                                    <iframe className='youtube-video' title='youtube' width="100%" height="215" src="https://www.youtube.com/embed/6W7l2unh6-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="video-container">
                                    <iframe className='youtube-video' title='youtube' width="100%" height="215" src="https://www.youtube.com/embed/6W7l2unh6-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="video-container">
                                    <iframe className='youtube-video' title='youtube' width="100%" height="215" src="https://www.youtube.com/embed/6W7l2unh6-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </Slider>
                        </div>
                        <Spaced />
                        <Content>
                            <Slider {...settings}>
                                <div className="depoimento-container">
                                    <img src={depoimento} alt="depoimento" className="depoimentos-img" />
                                </div>
                                <div className="depoimento-container">
                                    <img src={depoimento} alt="depoimento" className="depoimentos-img" />
                                </div>
                                <div className="depoimento-container">
                                    <img src={depoimento} alt="depoimento" className="depoimentos-img" />
                                </div>
                                <div className="depoimento-container">
                                    <img src={depoimento} alt="depoimento" className="depoimentos-img" />
                                </div>
                                <div className="depoimento-container">
                                    <img src={depoimento} alt="depoimento" className="depoimentos-img" />
                                </div>
                                <div className="depoimento-container">
                                    <img src={depoimento} alt="depoimento" className="depoimentos-img" />
                                </div>
                                <div className="depoimento-container">
                                    <img src={depoimento} alt="depoimento" className="depoimentos-img" />
                                </div>
                            </Slider>
                        </Content>
                        <Spaced />
                    </>
                )}
        </Container>
    )
}