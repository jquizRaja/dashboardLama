'use client'
import { BellRing, BookOpenCheck, MessagesSquare, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';


const Navbar = () => {
  const pathname=usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()} </div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <Search />
          <input type='text' placeholder='Search' className={styles.input}/>
        </div>
        <div className={styles.icons}>
         <BellRing size={20}/>
         <BookOpenCheck size={20}/>
         <MessagesSquare size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
