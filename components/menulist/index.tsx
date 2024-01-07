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
                    <div>
                        <Link
                            className={isActive ? 'activeMenu' : 'MenuLink'}
                            href={elem.link}
                            key={elem.label}
                        >
                            {elem.page}
                        </Link>
                    </div>
                );
            })}
        </>
    );
};

export { MenuList };
