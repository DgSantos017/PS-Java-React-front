import { Form, BoxField, InputField, Span, ButtonSearch } from '../style/FilterTransferStyle'
import { useState } from 'react'
import axios from 'axios'
import { useTransfersContext } from '../contexts/Transferencs';

export const FilterTransfer = () => {

    const { setData } = useTransfersContext();

     const [startDate, setStartDate] = useState('');
     const [endDate, setEndDate] = useState('');
     const [operatorName, setOperatorName] = useState('');
     const [numberAccount, setNumberAccount] = useState('')
     
     const urlLocal = 'http://localhost:8080/transfers/'
     const urlDeploy = 'https://ps-java-react-production.up.railway.app/transfers/'
     
     const handleSearch = async (event: any) => {
        event.preventDefault();

        await axios.get(`${urlDeploy}${numberAccount}`, {
            params: {
                startDate: startDate,
                endDate: endDate,
                transactionOperatorName: operatorName
            }
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
            <InputField 
                value={startDate}
                onChange={e => setStartDate(e.target.value)} 
            />
            <Span> Data de inicio </Span>
        </BoxField>
        <BoxField>
            <InputField
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
            />
            <Span> Data de Fim </Span>
        </BoxField>
        <BoxField>
            <InputField 
                value={operatorName}
                onChange={e => setOperatorName(e.target.value)}
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