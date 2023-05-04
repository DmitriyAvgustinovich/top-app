import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 'small', children, color = 'ghost', href, className }: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.small]: size == 'small',
                [styles.medium]: size == 'medium',
                [styles.ghost]: color == 'ghost',
                [styles.red]: color == 'red',
                [styles.grey]: color == 'grey',
                [styles.green]: color == 'green',
                [styles.primary]: color == 'primary',
            })}> {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'small' | 'medium';
    children: ReactNode;
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: string;
}
