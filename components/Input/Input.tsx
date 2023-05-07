import { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import styles from './Input.module.css';
import cn from 'classnames';
import { FieldError } from "react-hook-form";

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={cn(styles.inputWrapper, className)}>
            <input
                className={cn(styles.input, {
                    [styles.error]: error
                })}
                ref={ref} {...props}
            />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: FieldError;
}
