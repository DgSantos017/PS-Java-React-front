import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useTransfersContext } from '../contexts/Transferencs';
import { format } from 'date-fns';
import { DataNotFound } from '../style/FilterTransferStyle'

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: "rgb(50, 50, 50)",
    color: "white",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "#CCC",
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: "100%"
  },
  container: {
    maxHeight: 550,
    overflowY: "auto"
  }
})

export const ReportTransfer = () => {

  const { data } = useTransfersContext()

  const classes = useStyles();

  return data.length > 0 ? (
    <TableContainer className={classes.container} component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left"> Data e Hora </StyledTableCell>
            <StyledTableCell align="left"> Valor </StyledTableCell>
            <StyledTableCell align="left"> Tipo </StyledTableCell>
            <StyledTableCell align="left"> Nome do operador </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="left">
              {format(new Date(row.transferDate), 'dd/MM/yyyy HH:mm')}
              </StyledTableCell>
              <StyledTableCell align="left">{row.value}</StyledTableCell>
              <StyledTableCell align="left">{row.type}</StyledTableCell>
              <StyledTableCell align="left">{row.transactionOperatorName}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    ) : <DataNotFound> Não existem dados </DataNotFound>
}
