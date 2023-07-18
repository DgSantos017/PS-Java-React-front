import { ContainerReport, BoxDados, BoxSaldo, TableData, TableHeader, Table, BoxTableHeader, Boxthead, Tbody } from '../style/FilterReportStyle'
import { useTransfersContext } from '../contexts/Transferencs'
import { format } from 'date-fns'

export const ReportTransfer = () => {

    const { data } = useTransfersContext()
    
    return data.length > 0 ? (
        <ContainerReport>
          <BoxSaldo>
            <p>Saldo no total:   R$ {data[0].balanceInPeriod}</p>
            <p>Saldo no período: R$ {data[0].totalBalance}</p>
          </BoxSaldo>
          <BoxDados>
            <Table>
              <Boxthead>
                <BoxTableHeader>
                  <TableHeader> Data e Hora </TableHeader>
                  <TableHeader> Valor </TableHeader>
                  <TableHeader> Tipo </TableHeader>
                  <TableHeader> Nome do operador </TableHeader>
                </BoxTableHeader>
              </Boxthead>
              <Tbody>
                {data.map((item, index) => (
                  <tr key={item.id}>
                    <TableData oddRow={index % 2 === 0}>
                      {format(new Date(item.transferDate), 'dd/MM/yyyy HH:mm')}
                    </TableData>
                    <TableData oddRow={index % 2 === 0}>{item.value}</TableData>
                    <TableData oddRow={index % 2 === 0}>{item.type}</TableData>
                    <TableData oddRow={index % 2 === 0}>{item.transactionOperatorName}</TableData>
                  </tr>
                ))}
              </Tbody>
            </Table>
          </BoxDados>
        </ContainerReport>
      ) : null
    }
    