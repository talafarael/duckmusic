'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props={
    navLinks: any[]
}
const MenuList = ({navLinks}:Props) => {
  
const pathname=usePathname()
    return (
     <div>
       { navLinks.map((elem)=>{
            const isActive = pathname === elem.href
        return (
            <Link href={elem.link} key={elem.label}>
            {  elem.page}
            </Link>
        )
        })}
     </div>
    );
  };
  
  export { MenuList };