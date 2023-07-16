import { Form, BoxField, InputField, Span, ButtonSearch, CustomDatePicker } from '../style/FilterTransferStyle'
import { useState } from 'react'
import axios from 'axios'
import { useTransfersContext } from '../contexts/Transferencs';
import { format } from 'date-fns'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export const FilterTransfer = () => {

    const { setData } = useTransfersContext();

     const [startDate, setStartDate] = useState(new Date())
     const [endDate, setEndDate] = useState(new Date())
     const [transactionOperatorName, setTtransactionOperatorName] = useState('')
     const [numberAccount, setNumberAccount] = useState('')
     
     const urlLocal = 'http://localhost:8080/transfers/'
     const urlDeploy = 'https://ps-java-react-production.up.railway.app/transfers/'
     
     const handleSearch = async (event: any) => {
        event.preventDefault();

        const formattedStartDate = format(new Date(startDate), 'yyyy-MM-dd\'T\'HH:mm:ss');
        const formattedEndDate = format(new Date(endDate), 'yyyy-MM-dd\'T\'HH:mm:ss');

        await axios.get(`${urlDeploy}${numberAccount}`, { 
            params: { startDate: formattedStartDate, endDate: formattedEndDate, transactionOperatorName } 
        })
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log(`ERRO: ', ${error}`)
        })
    }
 
    return <Form>
        <BoxField>
            <CustomDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <Span> Data de inicio </Span>
        </BoxField>
        <BoxField>
            <CustomDatePicker selected={endDate} onChange={(date) => setStartDate(date)} />
            <Span> Data de Fim </Span>
        </BoxField>
        <BoxField>
            <InputField 
                value={transactionOperatorName}
                onChange={e => setTtransactionOperatorName(e.target.value)}
            />
            <Span> Nome do operador transacionado </Span>
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
    </Form>
}