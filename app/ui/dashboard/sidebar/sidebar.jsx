import { BookUser, CircleDollarSign, Coins, DatabaseZap, Group, HelpCircle, LayoutDashboard, LogOut, Settings, ShoppingBag, UsersRound } from 'lucide-react';
import Image from 'next/image';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';

const menuItems=[
  {
    title:"Pages",
    list:[
      {
        title:'Dashboard',
        path:"/dashboard",
        icon: <LayoutDashboard/>
      },
      {
        title:'Users',
        path:"/dashboard/users",
        icon: <UsersRound/>
      },
      {
        title:'Products',
        path:"/dashboard/products",
        icon: <ShoppingBag/>
      },
      {
        title:'Transactions',
        path:"/dashboard/transactions",
        icon: <CircleDollarSign/>
      },
    ]

  },
  {
    title:"Analyticss",
    list:[
      {
        title:'Revenue',
        path:"/dashboard/revenue",
        icon: <Coins />
      },
      {
        title:'People',
        path:"/dashboard/people",
        icon: <BookUser />
      },
      {
        title:'Reports',
        path:"/dashboard/reports",
        icon: <DatabaseZap/>
      },
      {
        title:'Teams',
        path:"/dashboard/teams",
        icon: <Group/>
      },
    ]
  },
  {
    title:"User",
    list:[
      {
        title:'Settings',
        path:"/dashboard/settings",
        icon: <Settings/>
      },
      {
        title:'Help',
        path:"/dashboard/help",
        icon: <HelpCircle/>
      },
     
    ]
  }
]

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
       <Image 
       className={styles.userImage}
       src='/noavatar.png'
       alt='avatar'
       height={50}
       width={50}
       priority={true}
       />
       <div className={styles.userDetail}>
        <span className={styles.userName}>John Doe</span>
        <span className={styles.userTitle}>Administrator</span>
       </div>
      </div>
      <ul className={styles.list}>
      {menuItems.map((cat)=>(
        <li key={cat.title}>
          <span className='styles.cat'>
         {cat.title}
          </span>
          {cat.list.map(item=>(
            <MenuLink item={item} key={item.title}/>
          ))}
        </li>
      ))}
      </ul>
      <button className={styles.logout}>
        < LogOut/>
        Logout</button>
    </div>
  )
}

export default Sidebar