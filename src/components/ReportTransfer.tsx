import { ContainerReport, BoxDados, BoxSaldo, TableData, TableHeader, Table } from '../style/FilterReportStyle'
import { useTransfersContext } from '../contexts/Transferencs'

export const ReportTransfer = () => {

    const { data } = useTransfersContext()

    return data.length > 0 ? (
        <ContainerReport>
          <BoxSaldo>
            <p>Saldo no total:   R$ 50</p>
            <p>Saldo no período: R$ 50</p>
          </BoxSaldo>
          <BoxDados>
            <Table>
              <thead>
                <tr>
                  <TableHeader> Data e Hora </TableHeader>
                  <TableHeader> Valor </TableHeader>
                  <TableHeader> Tipo </TableHeader>
                  <TableHeader> Nome do operador </TableHeader>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id}>
                    <TableData oddRow={index % 2 === 0}>{item.transferDate}</TableData>
                    <TableData oddRow={index % 2 === 0}>{item.value}</TableData>
                    <TableData oddRow={index % 2 === 0}>{item.type}</TableData>
                    <TableData oddRow={index % 2 === 0}>{item.transactionOperatorName}</TableData>
                  </tr>
                ))}
              </tbody>
            </Table>
          </BoxDados>
        </ContainerReport>
      ) : null
    }
    