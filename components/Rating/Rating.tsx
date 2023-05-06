import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent } from "react";

export const Rating = ({ isEditable = false, rating, setRating }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((rating: JSX.Element, index: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: index < currentRating,
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
        setRatingArray(updatedArray);
    };

    const changeDisplay = (index: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(index);
    };

    const onClick = (index: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(index);
    };

    const handleSpace = (index: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }
        setRating(index);
    };

    return (
        <div>{ratingArray.map((rating, index) => (<span key={index}>{rating}</span>))}</div>
    );
};

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}
