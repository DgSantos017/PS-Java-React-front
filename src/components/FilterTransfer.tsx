import { Form, BoxField, InputField, Span, ButtonSearch, CustomDatePicker, LadoEsquerdo } from '../style/FilterTransferStyle'
import { useState } from 'react'
import axios from 'axios'
import { useTransfersContext } from '../contexts/Transferencs'
import { format } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'

export const FilterTransfer = () => {

    const { setData } = useTransfersContext()

     const [ startDate, setStartDate] = useState<Date | null>(null)
     const [ endDate, setEndDate] = useState<Date | null>(null)
     const [ transactionOperatorName, setTtransactionOperatorName] = useState('')
     const [ numberAccount, setNumberAccount ] = useState('')
     const [ type, setType ] = useState('')
     
     //  const urlLocal = 'http://localhost:8080/transfers/'
     const urlDeploy = 'https://ps-java-react-production.up.railway.app/transfers/'
     
     const handleSearch = async (event: any) => {
        event.preventDefault()

        const formattedStartDate = startDate ? format(startDate, 'yyyy-MM-dd\'T\'HH:mm:ss') : ''
        const formattedEndDate = endDate ? format(endDate, 'yyyy-MM-dd\'T\'HH:mm:ss') : ''

        const params: { [key: string]: string } = {}

        if (formattedStartDate) {
            params.startDate = formattedStartDate
        }

        if (formattedEndDate) {
            params.endDate = formattedEndDate
        }

        if (transactionOperatorName) {
            params.transactionOperatorName = transactionOperatorName
        }

        if (type) {
            params.type = type
        }

        try {
            const response = await axios.get(`${urlDeploy}${numberAccount}`, { params: params })
            setData(response.data);
          } catch (error) {
            console.log('ERRO: ', error)
        }
     }

    return <Form>
        <LadoEsquerdo>
            <BoxField>
                <CustomDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <Span> Data de inicio </Span>
            </BoxField>
            <BoxField>
                <CustomDatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                <Span> Data de Fim </Span>
            </BoxField>
            <BoxField>
                <InputField 
                    value={transactionOperatorName}
                    onChange={e => setTtransactionOperatorName(e.target.value)}
                />
                <Span> Nome do operador transacionado </Span>
            </BoxField>
        </LadoEsquerdo>

        <LadoEsquerdo>
            <BoxField>
                <InputField
                    value={type}
                    onChange={e => setType(e.target.value)}
                />
                <Span> Tipo de Operação </Span>
            </BoxField>
            <BoxField>
                <InputField required
                    value={numberAccount}
                    onChange={e => setNumberAccount(e.target.value)}
                />
                <Span> * Numero da conta bancária </Span>
            </BoxField>
            <BoxField>
                <ButtonSearch onClick={handleSearch}>
                    Pesquisar
                </ButtonSearch>
            </BoxField>
        </LadoEsquerdo>
    </Form>
}