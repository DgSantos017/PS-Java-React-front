import { Form, BoxField, InputField, Span, ButtonSearch, CustomDatePicker, Select } from '../style/FilterTransferStyle'
import { useState } from 'react'
import axios from 'axios'
import { useTransfersContext } from '../contexts/Transferencs'
import { format } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'

export const FilterTransfer = () => {

    const { setData } = useTransfersContext()

     const [ startDate, setStartDate] = useState<any>(null)
     const [ endDate, setEndDate] = useState<any>(null)
     const [ transactionOperatorName, setTtransactionOperatorName] = useState('')
     const [ numberAccount, setNumberAccount ] = useState('')
     const [ type, setType ] = useState('')
     
     //  const urlLocal = 'http://localhost:8080/transfers/'
     const urlDeploy = 'https://ps-java-react-production.up.railway.app/transfers/'
     
     const handleSearch = async (event: any) => {
        event.preventDefault()

        if (!numberAccount) {
            toast.error('O número da conta é obrigatório!', {
              position: 'top-right',
              autoClose: 3000
            })
            return
        }

        if (startDate && endDate && startDate > endDate) {
            toast.error('A data de início não pode ser maior que a data de fim!', {
              position: 'top-right',
              autoClose: 3000
            })
            return
          }
        

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
            setData(response.data)

            if (response.data.length === 0) {
                toast.error('Nenhuma transaferência encontrada para os filtros informados!', {
                  position: 'top-right',
                  autoClose: 3000
                })
              } else {
                toast.success('Dados atualizados com sucesso!', {
                  position: 'top-right',
                  autoClose: 3000
                })
              }

          } catch (error) {
            console.log('ERRO: ', error)
        }
     }

    return <Form>
            <BoxField>
                <Span> <span style={{color: 'red'}}> * </span> Numero da conta </Span>
                <InputField required
                    value={numberAccount}
                    onChange={e => setNumberAccount(e.target.value)}
                />
            </BoxField>
            <BoxField>
                <Span> Nome do operador </Span>
                <InputField 
                    value={transactionOperatorName}
                    onChange={e => setTtransactionOperatorName(e.target.value)}
                />
            </BoxField>
            <BoxField>
                <Span> Data de início </Span>
                <CustomDatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="dd/MM/yyyy" maxDate={new Date()} />
            </BoxField>
            <BoxField>
                <Span> Data de Fim </Span>
                <CustomDatePicker selected={endDate} onChange={date => setEndDate(date)} dateFormat="dd/MM/yyyy" maxDate={new Date()}  />
            </BoxField>
            <BoxField>
                
                <Span> Tipo de operação </Span>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value=''> Todos </option>
                    <option value='DEPOSITO'> Depósito </option>
                    <option value='SAQUE'> Saque </option>
                    <option value='TRANSFERENCIA'> Transferência </option>
                </Select>
            </BoxField>
            <BoxField>
                <ButtonSearch onClick={handleSearch}>
                    Pesquisar
                </ButtonSearch>
            </BoxField>
            
        <ToastContainer position='top-right' />
    </Form>
}