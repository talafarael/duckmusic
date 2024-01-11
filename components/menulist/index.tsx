'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './style.module.scss';
type Props = {
    navLinks: any[];
};
const MenuList = ({ navLinks }: Props) => {
    const pathname = usePathname();
    return (
        <>
            {navLinks.map((elem) => {
                const isActive = pathname === elem.link;

                return elem.link == '' ? (
                    <div className={styles.lineMenu} key={elem.label}></div>
                ) : (
                    <Link
                        className={isActive ? 'styles.activeMenu' : 'styles.MenuLink'}
                        href={elem.link}
                    >
                        <div key={elem.label} className={ styles.liMenu}>
                            {elem.page}
                        </div>
                    </Link>
                );
            })}
        </>
    );
};

export { MenuList };
