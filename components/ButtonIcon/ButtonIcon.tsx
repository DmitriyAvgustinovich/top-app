import styles from './ButtonIcon.module.css';
import { HTMLAttributes, DetailedHTMLProps } from "react";
import cn from 'classnames';
import up from './Up.svg';
import close from './close.svg';
import menu from './menu.svg';

export const ButtonIcon = ({ appearance, icon, className }: ButtonIconProps): JSX.Element => {
    const IconComp = icons[icon];

    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.white]: appearance == 'white',
            })}
        >
            <IconComp />
        </button>
    );
};

const icons = {
    up,
    close,
    menu
};

type IconName = keyof typeof icons;

interface ButtonIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName;
    appearance: 'primary' | 'white';
}
