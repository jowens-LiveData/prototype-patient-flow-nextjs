import clsx from 'clsx';
import styles from './TableHeader.module.scss';

const TableHeader = () => {
  return (
    <div className={styles.tableHeader}>
      <div>
        <div className={clsx(styles.patientRowNameCol, styles.textLarge, styles.labelBold)}>Patient name</div>
        <div className={clsx(styles.patientRowAnonIdCol, styles.textLarge, styles.labelBold)}>Case #</div>
        <div className={clsx(styles.patientRowGenericButtonCol, styles.callInStatus)}>Call in status</div>
        <div className={clsx(styles.patientRowGenericButtonCol, styles.checkInStatus)}>Check in status</div>
        <div className={clsx(styles.patientRowGenericButtonCol, styles.readyForPreOp)}>Ready for PreOp</div>
        <div className={clsx(styles.patientRowGenericButtonCol, styles.toPreOp)}>To PreOp</div>
        <div className={styles.patientRowApplyCol}></div>
        <div className={styles.patientRowPrintCol}></div>
      </div>
    </div>
  )
}

export default TableHeader;
