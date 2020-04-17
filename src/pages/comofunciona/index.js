import React from 'react';
import './style/style.css';
import { Container, Banner, Spaced, Content } from '../../styles/styles';
import { FaTshirt, FaRulerCombined, FaFileInvoiceDollar, FaCreditCard, FaMoneyBillAlt, FaShoppingCart } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import banner from './assets/banner.png';

export default function ComoFunciona() {

    return (
        <Container>
            <Banner alt='banner' src={banner} />
            <Content>
                <Spaced />
                <ul className='list-how-function'>
                    <li className='list-item-how'>
                        <div className="list-left">
                            <span className='list-avatar'>
                                <FaTshirt />
                            </span>
                        </div>
                        <div className="list-right">
                            <label className='list-title'>PRIMEIRO PASSO</label>
                            <span className='list-description'>Você escolhe um dos nossos produtos oferecido no site, lembrando que a quantidade mínima de camisetas por modelo, cor e estampa são de 10 unidades, portanto não trabalhamos com quantidades menores que essa independente da quantidade total de camisetas.</span>
                        </div>
                    </li>
                    <li className='list-item-how'>
                        <div className="list-left">
                            <span className='list-avatar'>
                                <AiFillMessage />
                            </span>
                        </div>
                        <div className="list-right">
                            <label className='list-title'>SEGUNDO PASSO</label>
                            <span className='list-description'>Após escolher o produto entre em contacto com um dos nossos consultores através do link no nosso site para orçamentos; lá você tem duas opções. (1°) Mandar diretamente uma mensagem no nosso WhatsApp. (2°) Mandar uma mensagem ou pergunta informando o seu nome, e-mail e telefone, posteriormente iremos-lhe responder via email, ligação ou mensagem no WhatsApp respondendo à mensagem.</span>
                        </div>
                    </li>
                    <li className='list-item-how'>
                        <div className="list-left">
                            <span className='list-avatar'>
                                <FaFileInvoiceDollar />
                            </span>
                        </div>
                        <div className="list-right">
                            <label className='list-title'>TERCEIRO PASSO</label>
                            <span className='list-description'>Envie o modelo que você escolheu anteriormente e envie as imagens, slogan ou logo que será colocada na arte de apresentação da camiseta, caso não tenha alguma dessas imagens, pode estar nos passando as informações da arte para o nosso designer estar criando uma pra você. Com essas informações iremos rapidamente enviar-lhe o seu orçamento.</span>
                        </div>
                    </li>
                    <li className='list-item-how'>
                        <div className="list-left">
                            <span className='list-avatar'>
                                <FaRulerCombined />
                            </span>
                        </div>
                        <div className="list-right">
                            <label className='list-title'>QUARTO PASSO</label>
                            <span className='list-description'>Após a aprovação do orçamento todas as informações das artes já passada para o nosso consultor será enviada para o designer onde temos um prazo de até 3 dias úteis para apresentação do layout, caso ainda haja alguma alteração na arte são mais 2 dias úteis para apresentação do novo layout, se mesmo assim houver alguma outra alteração serão mais 2 dias úteis. Não cobramos a arte de camisetas feita com a Palmieri Uniformes.</span>
                        </div>
                    </li>
                    <li className='list-item-how'>
                        <div className="list-left">
                            <span className='list-avatar'>
                                <FaCreditCard />
                            </span>
                        </div>
                        <div className="list-right">
                            <label className='list-title'>QUINTO PASSO</label>
                            <span className='list-description'>Aprovando o layout partiremos para os detalhes finais. OBSERVAÇÃO: após a aprovação do layout não nos responsabilizados por quaisquer erros na estampa. Enviaremos as medidas das nossas camisetas que você pode também estar consultando aqui. Você enviará-nos todos os tamanhos que irá querer para o pedido (podendo ser tamanhos variados).</span>
                        </div>
                    </li>
                    <li className='list-item-how'>
                        <div className="list-left">
                            <span className='list-avatar'>
                                <FaMoneyBillAlt />
                            </span>
                        </div>
                        <div className="list-right">
                            <label className='list-title'>SEXTO PASSO</label>
                            <span className='list-description'>Para boletos, transferências ou Depósito trabalhamos da seguinte forma: opção de 50% de entrada para início da fabricação das camisetas e os outros 50% será após termino da fabricação, enviaremos uma foto das camisetas prontas para verificação, após isso estaremos aguardaremos o restante do valor para despachar a encomenda.
                            </span>
                            <span className='list-description'>
                                Para compras no cartão de crédito parcelamos em até 12x através do mercado pago onde de acordo com a quantidade de parcelas o valor Total do pedido aumentara, bandeiras disponíveis: Visa, Mastercard, Hipercard, American Express, Diners, Elo, Cartão Mercado Livre.
                            </span>
                        </div>
                    </li>
                    <li className='list-item-how'>
                        <div className="list-left">
                            <span className='list-avatar'>
                                <FaShoppingCart />
                            </span>
                        </div>
                        <div className="list-right">
                            <label className='list-title'>SÉTIMO PASSO</label>
                            <span className='list-description'>Com a confirmação do pagamento damos o prazo de 15 dias úteis para produção e mais o tempo de envio da transportadora para o pedido estar chegando até você.</span>
                        </div>
                    </li>
                </ul>
            </Content>
            <Spaced />
        </Container>
    );
}