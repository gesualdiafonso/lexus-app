import styled from "styled-components";

// Section principal
export const InformSection = styled.section`
    width: 100%;
    margin: 2rem auto;
    color: #fffafa;
    padding: 0;
    height: auto;
`;

// Contenedor princial
export const InformContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 6rem;
    margin: 0 auto;
    width: 100%;
    align-items: baseline;
`;

//Box 
export const BoxInform = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
`;

export const TitleBox= styled.h3`
    font-size: 1.9rem;
    margin-bottom: 1rem;
    font-weight: 600;
`;

export const Information = styled.p`
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
`;

export const ImgBox = styled.img`
    width: 100%;
    object-fit: cover;
    height: 150px;
    margin-top: 2rem;
`;

// Explore Section
export const ExploreContainer = styled.div`
    width: 100%;
    margin-top: 4rem;
`;

export const TitleExplore = styled.h3`
    font-size: 3rem;
    font-weight: 600;
`;

export const ExploreLine = styled.div`
    width: 100%;
    background-color: #fffafa;
    height: 2px;
    margin: 1rem 0;
`;

// Box Container
export const BoxContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
`;

// Box One Explore
export const BoxExplore = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BoxTitle = styled.h4`
    font-size: 2rem;
    font-weight: 700;
`;

export const BoxSubtitle = styled.span`
    font-size: 1.9rem;
    text-align: center;
    text-transform: uppercase;
    margin: 10px 0;
`;

export const LineBox = styled.div`
    width: 2px;
    height: 150px;
    background-color: #fffafa;
`;

export const ImgCart = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;
