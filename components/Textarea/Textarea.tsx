import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import styles from './Textarea.module.css';
import cn from 'classnames';

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
    return (
        <textarea className={cn(className, styles.input)} {...props} />
    );
};

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> { }
