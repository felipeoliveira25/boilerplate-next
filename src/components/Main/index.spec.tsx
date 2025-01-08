import { render, screen } from '@testing-library/react'
import { Main } from '.'

describe('<Main />', () => {
    it('should render the heading', () => {
        //renderiza o componente
        const {container} = render(<Main/>)

        //busca o elemento e verifica a existência do mesmo
        expect(screen.getByRole('heading', { name: /main para teste/i })).toBeInTheDocument()

        //gerar snapshot para 'memorizar uma modelo que o componente deve seguir e teoricamente não deve ser alterado'
        expect(container.firstChild).toMatchSnapshot();
    })
})