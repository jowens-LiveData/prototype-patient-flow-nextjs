import type { NextPage } from "next";
import dynamic from "next/dynamic";

import Header from '@/components/Header'

// const App = dynamic(() => import("../admin/App"), { ssr: false });

const Home: NextPage = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
