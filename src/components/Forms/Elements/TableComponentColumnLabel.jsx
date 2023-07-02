import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material'

const TableComponentColumnLabel = ({
  headerBackground,
  headerColSpan,
  header,
  marksArray,
  numberOfMarksArray,
  width,
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: '0px', width: { width } }}
    >
      <Table size='small'>
        <TableHead sx={{ background: headerBackground }}>
          <TableRow align='center'>
            <TableCell
              colSpan={headerColSpan}
              align='center'
              sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}
            >
              {header}
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            {marksArray.map((mark) => (
              <TableCell key={mark} align='center'>
                {mark}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {numberOfMarksArray.map((mark) => (
              <TableCell key={Math.random()} align='center'>
                {mark}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponentColumnLabel
