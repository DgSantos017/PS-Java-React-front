import {Form, BoxField, InputField, Span, ButtonSearch } from '../style/FilterTransferStyle'

export const FilterTransfer = () => {
    return <Form>
        <BoxField>
            <InputField />
            <Span> Data de inicio </Span>
        </BoxField>
        <BoxField>
            <InputField />
            <Span> Data de Fim </Span>
        </BoxField>
        <BoxField>
            <InputField />
            <Span> Nome do operador transacionado </Span>
        </BoxField>
        <BoxField>
            <ButtonSearch>
                Pesquisar
            </ButtonSearch>
        </BoxField>
    </Form>
}