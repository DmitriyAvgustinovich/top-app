import { DetailedHTMLProps, ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";
import styles from './Textarea.module.css';
import cn from 'classnames';
import { FieldError } from "react-hook-form";

export const Textarea = forwardRef(({ error, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(styles.textareaWrapper, className)}>
            <textarea className={cn(styles.textarea, {
                [styles.error]: error
            })}
                ref={ref} {...props}
            />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    error?: FieldError;
}
