import type { NextPage } from "next";
import dynamic from "next/dynamic";

import { MainHeader, TableHeader, TableBody } from '@/components';

import styles from '@/styles/Home.module.scss';

// const App = dynamic(() => import("../admin/App"), { ssr: false });\

export interface TableRowType {
  patientName: string,
  caseId: string,
}

const DATA: Array<TableRowType> = [
  { patientName: 'C, T', caseId: '10348' },
  { patientName: 'J, O', caseId: '32434' },
  { patientName: 'J, D', caseId: '23212' },
]

const Home: NextPage = () => {
  return (
    <div className={styles.patientFlowEntry}>
      <div className={styles.header}>
        <MainHeader />
        <TableHeader />
      </div>
      <TableBody data={DATA} />
    </div>
  );
};

export default Home;
