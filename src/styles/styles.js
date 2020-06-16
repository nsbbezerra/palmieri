import styled from "styled-components";

import middle from "../assets/middle-web.png";

export const Banner = styled.img`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 49px;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  padding: 10px;
  margin-top: 40px;
  color: #1a1a1a;
  font-family: "Anton", sans-serif;
  @media (max-width: 715px) {
    font-size: 3rem;
  }
  @media (max-width: 465px) {
    font-size: 2.5rem;
  }
  @media (max-width: 400px) {
    margin-top: 20px;
  }
  @media (max-width: 360px) {
    font-size: 2rem;
  }
`;

export const TitleSecondary = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  padding: 10px;
  color: #edba00;
  font-family: "Anton", sans-serif;
`;

export const TitleWhite = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  color: #f6f6f6;
  display: block;
  @media (max-width: 950px) {
    font-size: 3rem;
  }
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const DescProduct = styled.span`
  font-family: "Anton", sans-serif;
  font-size: 3.5rem;
  color: #fff;
  display: block;
  width: 90%;
  @media (max-width: 1250px) {
    font-size: 3.5rem;
  }
  @media (max-width: 1050px) {
    font-size: 3rem;
  }
  @media (max-width: 840px) {
    font-size: 2.5rem;
  }
  @media (max-width: 710px) {
    font-size: 2rem;
  }
  @media (max-width: 490px) {
    font-size: 1.5rem;
  }
`;

export const TitleProduct = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 10rem;
  font-weight: 800;
  color: #edba00;
  font-family: "Piedra", cursive;
  display: block;
  @media (max-width: 950px) {
    font-size: 7rem;
  }
  @media (max-width: 500px) {
    font-size: 5rem;
  }
`;

export const SubTitle = styled.h2`
  width: 100%;
  color: #555;
  margin-top: -15px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 40px;
  @media (max-width: 715px) {
    font-size: 1.4rem;
  }
  @media (max-width: 465px) {
    font-size: 1.2rem;
  }
  @media (max-width: 400px) {
    margin-bottom: 20px;
  }
  @media (max-width: 360px) {
    font-size: 1.1rem;
  }
`;

export const Card = styled.div`
  width: 250px;
  max-width: 250px;
  min-width: 250px;
  border-radius: 4px;
  transition: all 0.3s;
  margin-bottom: 40px;
  border: 1px solid #eee;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  &:hover {
    transform: scale(1.03);
  }
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
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 10px;
  @media (max-width: 414px) {
    width: 190px;
    max-width: 190px;
    min-width: 190px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
`;

export const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  margin-bottom: -5px;
`;

export const CardImageContainerCatalog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  margin-bottom: -5px;
`;

export const Content = styled.div`
  width: 100%;
  padding-left: 80px;
  padding-right: 80px;
  @media (max-width: 550px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 400px) {
    padding-left: 35px;
    padding-right: 35px;
  }
`;

export const CardTitle = styled.div`
  width: 100%;
  padding-top: 5px;
  text-align: center;
  font-weight: 800;
  font-size: 2.5rem;
  color: #1a1a1a;
  font-family: "Saira Extra Condensed", sans-serif;
`;

export const CardDescription = styled.div`
  width: 100%;
  padding: 10px;
  height: 100px;
  color: #444;
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

export const CardFooter = styled.div`
  width: 100%;
  padding: 10px;
  border-top: 0.5px solid #ddd;
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
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.99);
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
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.99);
  }
`;

export const CardAction = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  background-color: #edba00;
  height: 40px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #f6f6f6;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.4s;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.99);
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  width: 100%;
  border-radius: 4px;
  font-style: italic;
  background-color: #f6f6f6;
`;

export const SecondaryTextArea = styled.textarea`
  padding: 9px;
  color: #444;
  border: 1px solid #ddd;
  font-size: 1.6rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  width: 100%;
  border-radius: 4px;
  font-style: italic;
  resize: vertical;
  background-color: #f6f6f6;
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #eee;
  width: 100%;
  margin-top: -5px;
  @media (max-width: 650px) {
    display: none;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 13px;
  @media (max-width: 1100px) {
    padding: 10px;
  }
  @media (max-width: 500px) {
    padding: 7px;
  }
`;

export const GridImg = styled.img`
  height: 30px;
  margin-right: 20px;
  @media (max-width: 1000px) {
    height: 25px;
  }
  @media (max-width: 790px) {
    height: 22px;
  }
  @media (max-width: 613px) {
    height: 18px;
    margin-right: 10px;
  }
  @media (max-width: 480px) {
    height: 15px;
  }
  @media (max-width: 395px) {
    height: 12px;
  }
`;

export const GridDesc = styled.span`
  color: #444;
  font-size: 1.8rem;
  font-weight: 600;
  @media (max-width: 1100px) {
    font-size: 1.6rem;
  }
  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
  @media (max-width: 790px) {
    font-size: 1.1rem;
  }
  @media (max-width: 650px) {
    font-size: 1rem;
  }
  @media (max-width: 613px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
  @media (max-width: 395px) {
    font-size: 0.3rem;
  }
`;

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const Middle = styled.div`
  padding: 20px;
  background-image: url(${middle});
  background-position: bottom;
  background-size: cover;
`;

export const ContainerMiddle = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
`;

export const ContentMiddle = styled.div`
  position: relative;
  width: 100%;
`;

export const AcademyTitle = styled.span`
  font-weight: 600;
  font-size: 7rem;
  color: #333;
  font-family: "Anton", sans-serif;
  text-align: center;
  display: block;
  @media (max-width: 1000px) {
    font-size: 6rem;
  }
  @media (max-width: 785px) {
    font-size: 5rem;
  }
  @media (max-width: 650px) {
    font-size: 4rem;
  }
  @media (max-width: 470px) {
    font-size: 3rem;
  }
  @media (max-width: 350px) {
    font-size: 2rem;
  }
`;

export const BtnAcademy = styled.button`
  border: none;
  width: 100%;
  border-radius: 20px;
  background-color: #4caf50;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  padding: 10px;
  cursor: pointer;
  margin-top: 30px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.99);
  }
  @media (max-width: 1000px) {
    font-size: 2.2rem;
    padding: 8px;
    margin-top: 25px;
  }
  @media (max-width: 785px) {
    font-size: 2rem;
    padding: 6px;
    margin-top: 20px;
  }
  @media (max-width: 650px) {
    font-size: 1.7rem;
    padding: 5px;
    margin-top: 20px;
  }
  @media (max-width: 470px) {
    font-size: 1.3rem;
    padding: 5px;
    margin-top: 15px;
  }
  @media (max-width: 380px) {
    font-size: 1.1rem;
    padding: 5px;
    margin-top: 10px;
  }
`;

export const ContainerProductsPage = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-column-gap: 20px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const GridProductsPage = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: min-content;
`;

export const CardGridProduct = styled.button`
  width: 300px;
  border-radius: 4px;
  height: 420px;
  margin-bottom: 40px;
  border: 1px solid #eee;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  background: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(1);
  }
`;

export const ContainerImgProductPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  padding: 5px;
  border-top-left-radius: 3.5px;
  border-top-right-radius: 3.5px;
`;

export const ImgProductPage = styled.img`
  height: 100%;
`;

export const DescProductPage = styled.span`
  font-family: "Saira Extra Condensed", sans-serif;
  font-size: 2.3rem;
  font-weight: 700;
  color: #333;
  width: 100%;
  text-align: center;
  display: block;
`;

export const DescriptionProduct = styled.span`
  font-family: "Saira Extra Condensed", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  color: #555;
  width: 100%;
  text-align: center;
  display: block;
`;

export const BreadCrumb = styled.span`
  font-family: "Saira Extra Condensed", sans-serif;
  font-size: 2.5rem;
  display: block;
  @media (max-width: 450px) {
    font-size: 1rem !important;
  }
`;

export const ContainerBreadCrumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const BtnMenuOpen = styled.button`
  border: none;
  background: transparent;
  font-size: 2.7rem;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;
