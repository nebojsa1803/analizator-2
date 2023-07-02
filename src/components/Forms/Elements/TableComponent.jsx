import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material'

const TableComponent = ({
  headerBackground,
  headerColSpan,
  header,
  arrayOfCells,
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ minWidth: '30rem', borderRadius: 0 }}
    >
      <Table size='small'>
        <TableHead sx={{ background: headerBackground }}>
          <TableRow align='center'>
            <TableCell
              colSpan={headerColSpan}
              align='center'
              sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}
            >
              {header}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arrayOfCells.map((cell) => (
            <TableRow key={Math.random()}>
              <TableCell>{cell[0]}</TableCell>
              <TableCell>{cell[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent
