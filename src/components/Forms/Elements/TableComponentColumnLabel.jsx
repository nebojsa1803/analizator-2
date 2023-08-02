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
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              {header}
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            {marksArray.map((mark) => (
              <TableCell
                key={mark}
                align='center'
                sx={{ padding: 0, margin: 0 }}
              >
                {mark.replace('задатак', '')}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {numberOfMarksArray.map((mark) => (
              <TableCell
                key={Math.random()}
                align='center'
                sx={{ padding: 0, margin: 0 }}
              >
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
