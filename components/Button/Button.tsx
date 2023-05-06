import styles from './Button.module.css';
import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({ appearance, arrow = 'none', children, className, onClick }: ButtonProps): JSX.Element => {
    return (
        <button
            onClick={onClick}
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
            })}>
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
                <ArrowIcon />
            </span>}
        </button>
    );
};

interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
