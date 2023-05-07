import { DetailedHTMLProps, ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from "react";
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = forwardRef(({ color = 'white', children, className }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div className={cn(styles.card, className,
            styles.blue && color == 'blue'
        )}
            ref={ref}
        >
            {children}
        </div>
    );
});

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: 'white' | 'blue';
    children: ReactNode
}
