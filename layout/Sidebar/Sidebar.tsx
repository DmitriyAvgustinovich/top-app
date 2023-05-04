import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from "../Menu/Menu";
import Logo from '../logo.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo} />
            <div>поиск</div>
            <Menu />
        </div>
    );
};

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }
