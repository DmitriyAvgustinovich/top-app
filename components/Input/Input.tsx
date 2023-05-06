import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
    return (
        <input className={cn(className, styles.input)} {...props} />
    );
};

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }
