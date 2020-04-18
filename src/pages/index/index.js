import React from 'react';
import { Banner, Container, Title, Card, CardImage, Content, CardTitle, CardDescription, CardAction, Jumbotron, SubTitle, Spaced, TextContainer, Description, RowWrap, CardDelivery, ImageDelivery, ArrowCard, CardDeliveryNoBorder, CardDeliveryDescription, RowActionsCard, ButtonActionRowSecondary, ButtonActionRowPrimary, ButtonActionSecondary, CardDeliveryFooter, RowAround, CardShadow } from '../../styles/styles';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSearchPlus, FaTshirt, FaClipboardList, FaPhoneVolume } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import banner from '../../assets/capa.png'
import camiseta from '../../assets/camiseta.png';
import tshirt from './assets/tshirt.svg';
import arrow from './assets/arrow.svg';
import brazil from './assets/brazil.svg';
import card from './assets/card.svg';
import make from './assets/make.svg';
import comments from './assets/comments.svg';
import profissional from './assets/profissional.png';

import breakpoinsConfig from '../../configs/sliderConfig';

export default function IndexApp() {
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
        responsive: breakpoinsConfig
    };
    return (
        <Container>
            <Banner src={banner} alt='Banner Palmieri' />

            <Content>
                <Title>NOSSOS PRODUTOS</Title>

                <Slider {...settings}>
                    <Card>
                        <CardImage src={camiseta} alt='Camiseta Palmieri' />
                        <CardTitle>CAMISETAS POLO</CardTitle>
                        <CardDescription>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                        </CardDescription>
                        <CardAction>
                            <FaSearchPlus style={{ marginRight: 15 }} /> Veja Mais
                        </CardAction>
                    </Card>
                    <Card>
                        <CardImage src={camiseta} alt='Camiseta Palmieri' />
                        <CardTitle>CAMISETAS POLO</CardTitle>
                        <CardDescription>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                    </CardDescription>
                        <CardAction>
                            <FaSearchPlus style={{ marginRight: 15 }} /> Veja Mais
                        </CardAction>
                    </Card>
                    <Card>
                        <CardImage src={camiseta} alt='Camiseta Palmieri' />
                        <CardTitle>CAMISETAS POLO</CardTitle>
                        <CardDescription>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                        </CardDescription>
                        <CardAction>
                            <FaSearchPlus style={{ marginRight: 15 }} /> Veja Mais
                        </CardAction>
                    </Card>
                    <Card>
                        <CardImage src={camiseta} alt='Camiseta Palmieri' />
                        <CardTitle>CAMISETAS POLO</CardTitle>
                        <CardDescription>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                    </CardDescription>
                        <CardAction>
                            <FaSearchPlus style={{ marginRight: 15 }} /> Veja Mais
                        </CardAction>
                    </Card>
                    <Card>
                        <CardImage src={camiseta} alt='Camiseta Palmieri' />
                        <CardTitle>CAMISETAS POLO</CardTitle>
                        <CardDescription>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                        </CardDescription>
                        <CardAction>
                            <FaSearchPlus style={{ marginRight: 15 }} /> Veja Mais
                        </CardAction>
                    </Card>
                    <Card>
                        <CardImage src={camiseta} alt='Camiseta Palmieri' />
                        <CardTitle>CAMISETAS POLO</CardTitle>
                        <CardDescription>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                    </CardDescription>
                        <CardAction>
                            <FaSearchPlus style={{ marginRight: 15 }} /> Veja Mais
                        </CardAction>
                    </Card>
                </Slider>

            </Content>

            <Spaced />

            <Jumbotron>
                <TextContainer>
                    <SubTitle>PASSO A PASSO</SubTitle>
                    <Description>DESDE O MOMENTO DA ESCOLHA ATÉ O RECEBIMENTO EM SUA CASA</Description>
                </TextContainer>
                <RowWrap>
                    <CardDelivery>
                        <ImageDelivery src={tshirt} alt='tshirt palmieri uniformes' />
                        <ArrowCard src={arrow} />
                        <CardDeliveryDescription>
                            Você escolhe o modelo ou nos envia as informações.
                        </CardDeliveryDescription>
                        <RowActionsCard>
                            <ButtonActionRowPrimary>
                                <FaTshirt style={{ marginRight: 7 }} /> MODELOS
                            </ButtonActionRowPrimary>
                            <ButtonActionRowSecondary>
                                <FaClipboardList style={{ marginRight: 7 }} /> CATÁLOGOS
                            </ButtonActionRowSecondary>
                        </RowActionsCard>
                    </CardDelivery>
                    <CardDelivery>
                        <ImageDelivery src={comments} alt='tshirt palmieri uniformes' />
                        <ArrowCard src={arrow} />
                        <CardDeliveryDescription>
                            Alinha seu pedido com um de nossos consultores.
                        </CardDeliveryDescription>
                        <ButtonActionSecondary>
                            <FaPhoneVolume style={{ marginRight: 7 }} /> FALE CONOSCO
                        </ButtonActionSecondary>
                    </CardDelivery>
                    <CardDelivery>
                        <ImageDelivery src={card} alt='tshirt palmieri uniformes' />
                        <ArrowCard src={arrow} />
                        <CardDeliveryDescription>
                            Efetua o pagamento.
                        </CardDeliveryDescription>
                        <CardDeliveryFooter>
                            Depósito Bancário ou Cartão de Crédito
                        </CardDeliveryFooter>
                    </CardDelivery>
                    <CardDelivery>
                        <ImageDelivery src={make} alt='tshirt palmieri uniformes' />
                        <ArrowCard src={arrow} />
                        <CardDeliveryDescription>
                            Produzimos e separamos seu pedido.
                        </CardDeliveryDescription>
                        <CardDeliveryFooter>
                            Produzimos com o melhor material e a melhor qualidade.
                        </CardDeliveryFooter>
                    </CardDelivery>
                    <CardDeliveryNoBorder>
                        <ImageDelivery src={brazil} alt='tshirt palmieri uniformes' />
                        <CardDeliveryDescription>
                            Enviamos para todo o Brasil.
                        </CardDeliveryDescription>
                        <CardDeliveryFooter>
                            Entrega via Transportadora.
                        </CardDeliveryFooter>
                    </CardDeliveryNoBorder>
                </RowWrap>
            </Jumbotron>

            <Content>
                <Title>CONHEÇA NOSSOS PROFISSIONAIS</Title>
                <RowAround>
                    <CardShadow>
                        <CardImage src={profissional} alt='Profissional palmieri uniformes' />
                        <CardTitle>THOMÁS</CardTitle>
                        <CardDescription>Proprietário</CardDescription>
                    </CardShadow>
                    <CardShadow>
                        <CardImage src={profissional} alt='Profissional palmieri uniformes' />
                        <CardTitle>DENISE</CardTitle>
                        <CardDescription>Atendente</CardDescription>
                    </CardShadow>
                    <CardShadow>
                        <CardImage src={profissional} alt='Profissional palmieri uniformes' />
                        <CardTitle>MARIA PALMIERI</CardTitle>
                        <CardDescription>Vendedora</CardDescription>
                    </CardShadow>
                    <CardShadow>
                        <CardImage src={profissional} alt='Profissional palmieri uniformes' />
                        <CardTitle>SANTIAGO</CardTitle>
                        <CardDescription>Serigrafo</CardDescription>
                    </CardShadow>
                </RowAround>
            </Content>

        </Container>
    )
}