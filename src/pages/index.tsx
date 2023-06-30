import type { NextPage } from "next";
import dynamic from "next/dynamic";

import { MainHeader, TableHeader, TableBody } from '@/components';

import styles from '@/styles/Home.module.scss';

// const App = dynamic(() => import("../admin/App"), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className={styles.patientFlowEntry}>
      <div className={styles.header}>
        <MainHeader />
        <TableHeader />
      </div>
      <TableBody />
    </div>
  );
};

export default Home;
