import styled from "styled-components";

import middle from "../assets/middle-web.png";

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
  font-size: 4rem;
  font-weight: 700;
  padding: 10px;
  margin-top: 40px;
  color: #1a1a1a;
  font-family: "Anton", sans-serif;
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
`;

export const TitleProduct = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 10rem;
  font-weight: 800;
  color: #edba00;
  font-family: "Piedra", cursive;
  display: block;
`;

export const SubTitle = styled.h2`
  width: 100%;
  color: #555;
  margin-top: -15px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const Card = styled.div`
  width: 250px;
  max-width: 250px;
  min-width: 250px;
  border-radius: 4px;
  transition: all 0.3s;
  margin-bottom: 40px;
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
  @media (max-width: 414px) {
    height: 190px;
  }
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
  background: linear-gradient(
    180deg,
    rgba(240, 240, 240, 1) 0%,
    rgba(221, 221, 221, 1) 100%
  );
  width: 100%;
  margin-top: -5px;
  @media (max-width: 570px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
  @media (max-width: 1100px) {
    padding: 10px;
  }
`;

export const GridImg = styled.img`
  height: 50px;
  margin-right: 20px;
  @media (max-width: 1000px) {
    height: 35px;
  }
  @media (max-width: 790px) {
    height: 25px;
  }
  @media (max-width: 380px) {
    height: 20px;
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
  @media (max-width: 570px) {
    font-size: 1.5rem;
  }
  @media (max-width: 380px) {
    font-size: 1.2rem;
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
  padding: 30px;
  position: relative;
  background-image: url(${middle});
  background-position: center;
  background-size: cover;
`;

export const ContainerMiddle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const DescProduct = styled.span`
  font-family: "Anton", sans-serif;
  font-size: 4rem;
  color: #fff;
  display: block;
  width: 80%;
  margin-top: 40px;
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
  margin-top: 5%;
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
`;
