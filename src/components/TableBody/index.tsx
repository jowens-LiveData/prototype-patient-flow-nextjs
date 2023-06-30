import TableRow from '../TableRow';
import styles from './TableBody.module.scss';
import { TableRowType } from '@/pages/index';

interface IProps {
  data: Array<TableRowType>
}

const TableBody = ({ data }: IProps) => {
  return (
    <div className={styles.patientFlowEntryContentArea}>
      {data.map((row, idx) => <TableRow key={idx} rowData={row} />)}
    </div>
  )
}

export default TableBody;
