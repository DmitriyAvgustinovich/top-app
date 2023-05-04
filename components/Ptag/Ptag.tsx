import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({ size = 'small', children, className, ...props }: PtagProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.small]: size == 'small',
                [styles.medium]: size == 'medium',
                [styles.large]: size == 'large',
            })}
            {...props}
        >
            {children}

        </p>
    );
};

interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'small' | 'medium' | 'large';
    children: ReactNode
}
