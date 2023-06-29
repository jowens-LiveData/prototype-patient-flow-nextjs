import { useState } from 'react';

import styles from './MenuDropdown.module.scss';

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.appMenuContainer}>
      <button className={styles.appMenuButton} title="Show Menu" onClick={toggleMenu}>
        <svg
          viewBox="0 0 24 24"
        >
          <path
            stroke="#000000"
            fill="#000000"
            d="M3.8 6.5h16.4c.4 0 .8.6.4 1l-8 9.8c-.3.3-.9.3-1.2 0l-8-9.8c-.4-.4-.1-1 .4-1z"
          ></path>
        </svg>
      </button>
      {isOpen &&
        <div className={styles.appMenuDropdown}>
          <div className={styles["userinfo-logout"]} role="presentation">
            <span className={styles["userinfo-logout__name-role"]}>
              <strong>livedata</strong>
              <br />
              <span>(LiveData Superuser)</span>
            </span>
            <button
              className={styles["userinfo-logout__logout"]}
              id="menuLogout"
            >
              Logout
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default MenuDropdown;
