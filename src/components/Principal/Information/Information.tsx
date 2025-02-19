import * as S from './styles';
import lexusTech from '../../../assets/lexus-interno.png';
import traseroLexus from '../../../assets/lexus-dorso.png';
import lexusCoupe from '../../../assets/lexus-frente.png';
import LexusFin from '../../../assets/auto-lexus-footer.png';

export default function Information(){
    return(
        <S.InformSection>
            <S.InformContainer>

                <S.BoxInform>
                    <S.TitleBox>Tecnología avanzada</S.TitleBox>
                    <S.Information>Una ingeniería reforzada para se aventurar.</S.Information>
                    <S.Information>Resistencia rigida a la gravedad.</S.Information>
                    <S.ImgBox src={lexusTech} alt='Tecnologia Lexus' />
                </S.BoxInform>

                <S.BoxInform>
                    <S.TitleBox>Faros de Aparencia</S.TitleBox>
                    <S.Information>Una inspiración unica y innovadora de sus LED.</S.Information>
                    <S.Information>Dimensional y sin fin.</S.Information>
                    <S.ImgBox src={traseroLexus} alt='Lexus Farol Led' />
                </S.BoxInform>

                <S.BoxInform>
                    <S.TitleBox>El lujo exterior</S.TitleBox>
                    <S.Information>Diseñado exclusivamente para que pueda ser explorado.</S.Information>
                    <S.Information>Color unico y nunca ya visto!</S.Information>
                    <S.ImgBox src={lexusCoupe} alt='Lexus Coupe LC'/>
                </S.BoxInform>

            </S.InformContainer>
            <S.ExploreContainer>
                <S.TitleExplore>Explore su LC Coupe</S.TitleExplore>
                <S.ExploreLine />
                <S.BoxContainer>
                    <S.BoxExplore>
                        <S.BoxTitle>540 Nm</S.BoxTitle>
                        <S.BoxSubtitle>Torque Máximo</S.BoxSubtitle>
                    </S.BoxExplore>
                    <S.LineBox />
    
                    <S.BoxExplore>
                        <S.BoxTitle>5.0L V8</S.BoxTitle>
                        <S.BoxSubtitle>Motor Naftero Ciclo Otto</S.BoxSubtitle>
                    </S.BoxExplore>
                    <S.LineBox />

                    <S.BoxExplore>
                        <S.BoxTitle>5.0L V8</S.BoxTitle>
                        <S.BoxSubtitle>Potencia Máxima</S.BoxSubtitle>
                    </S.BoxExplore>

                    <S.BoxExplore>
                        <S.ImgCart src={LexusFin} alt='Lexus Coupe LC' />
                    </S.BoxExplore>

                </S.BoxContainer>
            </S.ExploreContainer>
        </S.InformSection>
    )
}