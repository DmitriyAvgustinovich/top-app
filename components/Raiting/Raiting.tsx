import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './Raiting.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent } from "react";

export const Raiting = ({ isEditable = false, raiting, setRaiting }: RaitingProps): JSX.Element => {
    const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRaiting(raiting);
    }, [raiting]);

    const constructRaiting = (currentRaiting: number) => {
        const updatedArray = raitingArray.map((raiting: JSX.Element, index: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: index < currentRaiting,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(index)}
                    onClick={() => onClick(index + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
                    />
                </span>
            );
        });
        setRaitingArray(updatedArray);
    };

    const changeDisplay = (index: number) => {
        if (!isEditable) {
            return;
        }
        constructRaiting(index);
    };

    const onClick = (index: number) => {
        if (!isEditable || !setRaiting) {
            return;
        }
        setRaiting(index);
    };

    const handleSpace = (index: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRaiting) {
            return;
        }
        setRaiting(index);
    };

    return (
        <div>{raitingArray.map((raiting, index) => (<span key={index}>{raiting}</span>))}</div>
    );
};

interface RaitingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    raiting: number;
    setRaiting?: (raiting: number) => void;
}
