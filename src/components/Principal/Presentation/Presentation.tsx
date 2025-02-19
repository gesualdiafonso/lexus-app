import * as S from './styles';
import carOne from '../../../assets/auto-lexus1.png';
import figureOne from '../../../assets/formas/forma-1.png';
import figureTwo from '../../../assets/formas/forma-2.png';
import figureThree from '../../../assets/formas/forma-3.png';
import cartTwo from '../../../assets/lexus-interior.png';

export default function Presentation() {
    return(
        <S.Main>
            <S.Presentation>
                <S.PresentationOneImage>
                    <S.ImageOne src={ carOne } alt='Lexus Luxury Coupe'/>
                </S.PresentationOneImage>
                <S.PresentationInfo>
                    <S.TitlePresent>LC Luxury Coupe</S.TitlePresent>
                    <S.LinePresent />
                    <S.SubtitlePresent>Máximo</S.SubtitlePresent>
                    <S.SubtitlePresent>Rendimiento</S.SubtitlePresent>
                </S.PresentationInfo>
                <S.FiguresContent>
                    <S.FigureOne src={ figureOne } alt='Figura 1'/>
                    <S.FigureTwo src={ figureTwo } alt='Figura 2'/>
                    <S.FigureThree src={ figureThree } alt='Figura 3'/>
                </S.FiguresContent>
                <S.PresentationTwoContent>
                    <S.TitleContent>
                    <S.TitlePresentTwo>Calidad y <br /> artesanía</S.TitlePresentTwo>
                    </S.TitleContent>
                    <S.InfortmationContent>
                        <S.Information>Un design desportivo y</S.Information>
                        <S.Information>confeccionado en Alcántara</S.Information>
                        <S.Information>con revestimientos en cuero.</S.Information>
                    </S.InfortmationContent>
                </S.PresentationTwoContent>
                <S.PresentationTwoImage>
                    <S.ImageTwo src={ cartTwo } alt='Interior Lexus Coupe'/>
                </S.PresentationTwoImage>
            </S.Presentation>
        </S.Main>
    )
}