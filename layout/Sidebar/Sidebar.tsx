import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from "../Menu/Menu";
import Logo from '../logo.svg';
import { Search } from "../../components";

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)}>
            <Logo className={styles.logo} />
            <Search />
            <Menu />
        </div>
    );
};

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }
