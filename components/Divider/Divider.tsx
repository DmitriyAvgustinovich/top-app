import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './Divider.module.css';
import cn from 'classnames';

export const Divider = ({ className }: DividerProps): JSX.Element => {
    return (
        <hr className={cn(className, styles.hr)} />
    );
};

interface DividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> { }
