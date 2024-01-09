'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './style.css';
type Props = {
    navLinks: any[];
};
const MenuList = ({ navLinks }: Props) => {
    const pathname = usePathname();
    return (
        <>
        {navLinks.map((elem) => {
            const isActive = pathname === elem.link;
    
            return (
                elem.link=='' ? (
                    <div className='lineMenu' key={elem.label}></div>
                ) : (
                    
                        <Link
                            className={isActive ? 'activeMenu' : 'MenuLink'}
                            href={elem.link}
                        ><div key={elem.label} className='liMenu'>
                            {elem.page}
                            </div>
                        </Link>
                    
                )
            );
        })}
    </>
    
    );
};

export { MenuList };
