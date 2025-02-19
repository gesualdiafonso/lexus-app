import styled from "styled-components";

// Contenedor principal
export const Main = styled.main`
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
    padding: 0;
`;

// Primeira Seção de informação principal
export const Presentation = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0;
`;

// Contenedor de la imagen
export const PresentationOneImage = styled.div`
    width: 100%;
`;

export const ImageOne = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    z-index: 0;
`;

// Contenedor de la información
export const PresentationInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    margin: 40px;
`;

export const TitlePresent = styled.h2`
    font-size: 3rem;
    font-weight: 500;
    color: #fffafa;
    margin: 0 20px;
`;

// Linha divisória entre H2 e P
export const LinePresent = styled.div`
    width: 450px;
    height: 2px;
    background: #fffafa;
    margin: 10px 0;
`;

export const SubtitlePresent = styled.p`
    font-size: 2.5rem;
    color: #fffafa;
    margin: 0;
    padding: 0;
    font-weight: 200;
`;

export const FiguresContent = styled.div`
    max-width: 1240px;
    width: 100%;
    position: absolute;
    margin: 0;
`;

// Figuras que serão estilizadas
export const FigureOne = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    position: absolute;
    top: 553px;
    z-index: 4;
`;

export const FigureTwo = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 580px;
    z-index: 3;
`;

export const FigureThree = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 600px;
    padding: 0;
    z-index: 2;
`;

// Contenedor da segunda informação de H2 e P
export const PresentationTwoContent = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 550px;
    margin: 8rem 0;
    z-index: 5;
    gap: 9rem;
`;

export const TitleContent = styled.div`
    width: 50%;
    margin: 0 2rem;
`

export const TitlePresentTwo = styled.h2`
    font-size: 4rem;
    font-weight: 500;
    font-style: italic;
    color: #fffafa;
`;

export const InfortmationContent = styled.div`
    width: 100%;
    margin: 0 5rem;
`;

export const Information = styled.p`
    text-align: right;
    font-size: 2rem;
    color: #fffafa;
`;

// Contenedor da segunda imagem
export const PresentationTwoImage = styled.div`
    width: 100%;
    margin-top: 6rem;
`;

export const ImageTwo = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    z-index: 0;
`;

