import { ContainerReport, BoxDados, BoxPaginacao, BoxSaldo, Info, Button, TR, TD } from '../style/FilterReportStyle'
import { useTransfersContext } from '../contexts/Transferencs'

export const ReportTransfer = () => {

    const { data } = useTransfersContext()

    return data.length > 0 ? <ContainerReport>
        <BoxSaldo>
            <Info> Saldo no total: 50 </Info>
            <Info> Saldo no periodo: 50 </Info>
        </BoxSaldo>
        <BoxDados>
            <TR>
                <TD> Dados </TD>
                <TD> Valencia </TD>
                <TD> Tipo </TD>
                <TD> Nome do operador transicionado </TD>
            </TR>
            {data.map((item) => (
            <TR key={item.id}>
                <TD>{item.transferDate}</TD>
                <TD>{item.value}</TD>
                <TD>{item.type}</TD>
                <TD>{item.transactionOperatorName}</TD>
            </TR>
        ))}
        </BoxDados>
        <BoxPaginacao>
            <Button> &lt; </Button> 
            <Button> 1 </Button> 
            <Button> 2 </Button> 
            <Button> 3 </Button> 
            <Button> &gt; </Button>
        </BoxPaginacao>
    </ContainerReport> : null
}