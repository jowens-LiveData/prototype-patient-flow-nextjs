import clsx from "clsx";

import styles from "./TableRow.module.scss";
import tableHeaderStyles from "../TableHeader/TableHeader.module.scss";

const CheckBoxButton = ({ fieldName, label, onToggleSelected, selected }) => {
  if (
    !(
      (Object.values(selected).some((item) => !!item) && selected[fieldName]) ||
      Object.values(selected).every((item) => !item)
    )
  ) {
    return null;
  }

  return (
    <div
      className={clsx(tableHeaderStyles.patientRowGenericButtonCol, tableHeaderStyles[fieldName])}
    >
      <div
        id={`${fieldName}-Check`}
        className={clsx(
          styles.patientRowGenericButtonCheckboxContainer,
          styles.unsetCheckbox,
          styles.textLarge,
        )}
        onClick={() => onToggleSelected(fieldName)}
      >
        <span className={tableHeaderStyles.labelBold}>{selected[fieldName] ? "☑" : "☐"}</span>
        &nbsp;{label}
      </div>
    </div>
  );
};

export default CheckBoxButton;
