import styled from 'styled-components';

export const Banner = styled.img`
    width: 100%;
`;

export const Container = styled.div`
    width: 100%;
    margin-top: 50px;
`;

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #1a1a1a;
    border-bottom: 2px solid #edba00;
`;

export const Card = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    width: 250px;
    max-width: 250px;
    min-width: 250px;
    border-radius: 2px;
    @media (max-width: 414px) {
        width: 190px;
        max-width: 190px;
        min-width: 190px;
    }
`;

export const CardShadow = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    width: 250px;
    max-width: 250px;
    min-width: 250px;
    box-shadow: 0px 0px 20px rgba(0,0,0,.1);
    border-radius: 2px;
    margin-bottom: 10px;
    @media (max-width: 414px) {
        width: 190px;
        max-width: 190px;
        min-width: 190px;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    @media (max-width: 414px) {
        height: 190px;
    }
`;

export const Content = styled.div`
    width: 100%;
    padding-left: 80px;
    padding-right: 80px;
    @media (max-width: 550px) {
        padding-left: 50px;
        padding-right: 50px;
    }
`;

export const CardTitle = styled.div`
    width: 100%;
    border-top: .5px solid #ddd;
    border-bottom: .5px solid #ddd;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    color: #1a1a1a;
    background-color: #eee;
`;

export const CardDescription = styled.div`
    width: 100%;
    padding: 10px;
    color: #444;
    font-size: 1.2rem;
    line-height: 1.8rem;
`;

export const CardFooter = styled.div`
    width: 100%;
    padding: 10px;
    border-top: .5px solid #ddd;
`;

export const PrimaryButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    background-color: #1a1a1a;
    height: 38px;
    font-size: 1.3rem;
    font-weight: 600;
    color: #f6f6f6;
    border-radius: 2px;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        background-color: #333333;
    }
    &:active {
        opacity: .8;
        transition: none;
    }
`;

export const PrimaryButtonNotFull = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #1a1a1a;
    padding: 13px;
    font-size: 1.3rem;
    font-weight: 600;
    color: #f6f6f6;
    border-radius: 2px;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        background-color: #333333;
    }
    &:active {
        opacity: .8;
        transition: none;
    }
`;

export const CardAction = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    background-color: #1a1a1a;
    height: 40px;
    font-size: 1.3rem;
    font-weight: 600;
    color: #f6f6f6;
    cursor: pointer;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    transition: all .4s;

    &:hover {
        background-color: #232323;
    }
    &:active {
        opacity: .8;
        transition: none;
    }
`;

export const Jumbotron = styled.div`
    width: 100%;
    padding: 20px;
    background-color: #eee;
`;

export const TextContainer = styled.div`
    width: 100%;
    padding: 8px;
    border-bottom: 1px solid #444;
    text-align: center;
`;

export const SubTitle = styled.h2`
    width: 100%;
    color: #444;
    line-height: 2.5rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 500;
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 1.5rem;
    color: #555;
    line-height: 2.5rem;
`;

export const Spaced = styled.div`
    width: 100%;
    height: 50px;
    background-color: transparent;
`;

export const RowWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const CardDelivery = styled.div`
    background-color: #fff;
    border-right: 1.5px solid #ccc;
    width: 200px;
    border-bottom: 1px solid #eee;
`;

export const CardDeliveryNoBorder = styled.div`
    background-color: #fff;
    width: 200px;
`;

export const ImageDelivery = styled.img`
    width: 100%;
    height: 200px;
    padding: 40px;
`;

export const ArrowCard = styled.img`
    width: 16px;
    height: 48px;
    position: relative;
    margin-bottom: 130px;
    margin-right: -100px;
`;

export const CardDeliveryDescription = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: #444;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
`;

export const RowActionsCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ButtonActionRowPrimary = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    border: none;
    background-color: #1a1a1a;
    height: 40px;
    font-size: 1rem;
    font-weight: 600;
    color: #f6f6f6;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        background-color: #232323;
    }
    &:active {
        opacity: .8;
        transition: none;
    }
`;

export const ButtonActionRowSecondary = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    border: none;
    background-color: #edba00;
    height: 40px;
    font-size: 1rem;
    font-weight: 600;
    color: #1a1a1a;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        background-color: #f8c200;
    }
    &:active {
        opacity: .8;
        transition: none;
    }
`;

export const ButtonActionSecondary = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    background-color: #edba00;
    height: 40px;
    font-size: 1rem;
    font-weight: 600;
    color: #1a1a1a;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        background-color: #f8c200;
    }
    &:active {
        opacity: .8;
        transition: none;
    }
`;

export const CardDeliveryFooter = styled.div`
    width: 100%;
    height: 40px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.15rem;
    text-align: center;
    font-weight: 400;
    color: #666;
`;

export const RowAround = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 15px;
`;

export const RowBetween = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 15px;
`;

export const SecondaryInput = styled.input`
    padding: 9px;
    color: #444;
    border: 1px solid #ddd;
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    width: 100%;
    border-radius: 2px;
    font-style: italic;
    background-color: #fff;
`;

export const SecondaryTextArea = styled.textarea`
    padding: 9px;
    color: #444;
    border: 1px solid #ddd;
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    width: 100%;
    border-radius: 2px;
    font-style: italic;
    resize: vertical;
    background-color: #fff;
`;