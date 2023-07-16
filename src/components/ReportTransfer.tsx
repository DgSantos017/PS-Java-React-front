import { ContainerReport, BoxDados, BoxPaginacao, BoxSaldo, Info, Button, TR, TD } from '../style/FilterReportStyle'

export const ReportTransfer = () => {
    return <ContainerReport>
        <BoxSaldo>
            <Info> Saldo no total: 50 conto </Info>
            <Info> Saldo no periodo: 50 conto </Info>
        </BoxSaldo>
        <BoxDados>
            <TR>
                <TD> Dados </TD>
                <TD> Valencia </TD>
                <TD> Tipo </TD>
                <TD> Nome do operador transicionado </TD>
            </TR>
            <TR>
                <TD> 11/01/97 </TD>
                <TD> 7.800 reais </TD>
                <TD> Deposito </TD>
                <TD> Diogo </TD>
            </TR>
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