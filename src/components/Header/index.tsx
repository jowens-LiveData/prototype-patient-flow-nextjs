import Image from "next/image";

import MenuDropdown from "../MenuDropdown";

import styles from './Header.module.scss';

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Header = () => {
  const now = new Date();

  return (
    <header className={styles.header}>
      <Image
        src="/LiveData-logo-BWR.png"
        alt="LiveData Logo"
        width={140}
        height={70}
      />
      <h1>
        {now.toTimeString().slice(0, 5)}
      </h1>
      <p>
        {weekday[now.getDay()]}
        <br />
        {month[now.getMonth()]} {now.getDate()}
        <br />
        {now.getFullYear()}
      </p>
      <Image
        src="/CustomerLogo-wide.png"
        alt="CustomerLogo"
        width={346}
        height={72}
      />
      <MenuDropdown />
    </header>
  );
};

export default Header;
