import * as S from './styles';

export default function Descount (){
    return(
        <S.SectionD>

            <S.Container>
                <S.Valor>12%</S.Valor>
                <S.InformeContainer>
                    <S.Informe>En todas las unidades!</S.Informe>
                    <S.Informe>Edición de exclusividad.</S.Informe>
                </S.InformeContainer>
            </S.Container>

            <S.BtnReserva>
                <S.Text>Reservalo</S.Text>
                {/* Vai entrar um svg para fazer a flexa com uma animação */}
                <S.IconWrapper>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 5L16 12L8 19"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </S.IconWrapper>
            </S.BtnReserva>

        </S.SectionD>
    )
}