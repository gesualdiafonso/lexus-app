import * as S from './styles';
import logoImg from '../../assets/logo-lexus.png';
import bannerImg from '../../assets/BannerPresent.png';

export default function Header() {
    return (
        <S.HeaderContainer>
            <S.Banner src={bannerImg} alt="Banner Lexus" />
            <S.HeaderContent>
                <S.Logo src={logoImg} alt="Logo Lexus" />
                <S.Title>Edición Limitada</S.Title>
                <S.InformationContent>
                    <S.LineHorizontal />
                    <S.InformationBlock>
                        <S.Information>La emoción de manejar</S.Information>
                        <S.Information>No es medible</S.Information>
                        <S.Information>Volver a la emoción</S.Information>
                    </S.InformationBlock>
                </S.InformationContent>
            </S.HeaderContent>
        </S.HeaderContainer>
    );
}
