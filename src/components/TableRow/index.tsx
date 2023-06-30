import { useState } from "react";
import clsx from "clsx";

import styles from "./TableRow.module.scss";
import tableHeaderStyles from "../TableHeader/TableHeader.module.scss";
import CheckBoxButton from "./CheckBoxButton";

const TableRow = ({ rowData }) => {
  const [selected, setSelected] = useState({});

  const toggleSelected = (type) => {
    setSelected((prev) => ({ [type]: !prev[type] }));
  };

  return (
    <div className={styles.patientRow}>
      <div
        className={clsx(
          tableHeaderStyles.patientRowNameCol,
          tableHeaderStyles.textLarge,
          tableHeaderStyles.labelBold,
        )}
      >
        {rowData.patientName}
      </div>

      <div
        className={clsx(
          tableHeaderStyles.patientRowAnonIdCol,
          tableHeaderStyles.textLarge,
          tableHeaderStyles.labelBold,
        )}
      >
        {rowData.caseId}
      </div>

      <CheckBoxButton
        fieldName="callInStatus"
        label="Called"
        onToggleSelected={toggleSelected}
        selected={selected}
      />
      <CheckBoxButton
        fieldName="checkInStatus"
        label="Checked In"
        onToggleSelected={toggleSelected}
        selected={selected}
      />
      <CheckBoxButton
        fieldName="readyForPreOp"
        label="Ready for PreOp"
        onToggleSelected={toggleSelected}
        selected={selected}
      />
      <CheckBoxButton
        fieldName="toPreOp"
        label="To PreOp"
        onToggleSelected={toggleSelected}
        selected={selected}
      />

      {Object.values(selected).some((item) => !!item) ? (
        <div className={tableHeaderStyles.patientRowApplyCol}>
          <div
            id="Apply-Button"
            className={clsx(styles.patientRowApplyButtonContainer, styles.applyControlGradient)}
          >
            Confirm
          </div>
        </div>
      ) : (
        <div className={tableHeaderStyles.patientRowPrintCol}>
          <div
            id="Print-Button"
            className={clsx(styles.actionButton, styles.printControlGradient)}
            onClick={() => window.print()}
          >
            Print
          </div>
        </div>
      )}
    </div>
  );
};

export default TableRow;
