import { ContainerReport, BoxDados, BoxPaginacao, BoxSaldo, Info, Button, TR, TD } from '../style/FilterReportStyle'
import { useTransfersContext } from '../contexts/Transferencs'

export const ReportTransfer = () => {

    const { data } = useTransfersContext();
    console.log(data)

    return <ContainerReport>
        <BoxSaldo>
            <Info> Saldo no total: {data[0].totalBalance} </Info>
            <Info> Saldo no periodo: {data[0].balanceInPeriod} </Info>
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
    </ContainerReport>
}