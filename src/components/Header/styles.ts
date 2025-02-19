import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Banner = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1; /* Mantém o banner atrás dos outros elementos */
    max-width: 1920px;
    margin: 0 auto;

    @media (max-width: 1240px) {
        height: auto;
    }
`;

export const HeaderContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 1240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2; /* Garante que os elementos fiquem sobre o banner */
    margin: 0 auto;

`;

export const Title = styled.h1`
    font-size: 5rem;
    color: #fffafa;
    font-weight: bold;
    font-style: italic;
    position: absolute;
    top: 20%;
`;

export const Logo = styled.img`
    width: 186px;
    position: absolute;
    top: 5%;
    left: 10%;
    z-index: 3; /* Mantém a logo no topo */
`;

export const InformationContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    position: absolute;
    right: 5%;
`;

export const LineHorizontal = styled.div`
    width: 2px;
    background: #fffafa;
    height: 95px;
    margin: 0 20px;
`;

export const InformationBlock = styled.div`
    text-align: left;
`;

export const Information = styled.p`
    font-size: 1.5rem;
    color: #fffafa;
    font-weight: 300;
    margin: 5px 0;
`;
