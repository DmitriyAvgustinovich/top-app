import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({ color = 'white', children, className }: CardProps): JSX.Element => {
    return (
        <div className={cn(styles.card, className,
            styles.blue && color == 'blue'
        )}>
            {children}
        </div>
    );
};

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: 'white' | 'blue';
    children: ReactNode
}
