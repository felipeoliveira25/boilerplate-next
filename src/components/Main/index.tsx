import * as S from './styles'

interface MainProps {
    title: string;
    description: string;
    background?: string;
}

export const Main = ({title, description, background}: MainProps) => {
    return(
        <S.Wrapper background={background}>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
        </S.Wrapper>
    )
}