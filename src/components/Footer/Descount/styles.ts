import styled from "styled-components";

export const SectionD = styled.section`
    color: #fffafa;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2rem auto;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Valor = styled.span`
    font-size: 5rem;
    font-weight: 600;
`;

export const InformeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
`;

export const Informe = styled.span`
    font-size: 1.8rem;
    font-weight: 500;
`;

export const BtnReserva = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    width: 250px;
    height: 50px;
    border-radius: 25px;
    background: linear-gradient(to right, #002d4f, #2e5a82);
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 400;
    font-family: "Montserrat", serif;
    cursor: pointer;
    outline: none;
    transition: 0.3s ease;
    position: relative;
    overflow: hidden;
    margin: 2rem auto;

    &:hover {
        background: linear-gradient(to right, #003f6b, #3e7bab);
        box-shadow: 0 0 15px #00ff99, 0 0 30px #00ccff;
    }

    &::before {
        content: "";
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border-radius: 30px;
        background: linear-gradient(45deg, #00ff99, #007bff, #00ccff, #00ff99);
        opacity: 0;
        transition: 0.3s ease;
        z-index: -1;
        filter: blur(10px);
    }

    &:hover::before {
        opacity: 1;
    }
`;

export const IconWrapper = styled.span`
    background: linear-gradient(to right, #007bff, #00ccff);
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease;
`;

export const Text = styled.span`
    margin-left: 20px;
`;