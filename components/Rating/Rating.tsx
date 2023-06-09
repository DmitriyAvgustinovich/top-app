import { DetailedHTMLProps, ForwardedRef, HTMLAttributes, forwardRef } from "react";
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent } from "react";
import { FieldError } from "react-hook-form";

export const Rating = forwardRef(({ isEditable = false, error, rating, setRating }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
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
        <div ref={ref} className={cn(styles.ratingWrapper, {
            [styles.error]: error
        })}>
            {ratingArray.map((rating, index) => (<span key={index}>{rating}</span>))}
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
    error?: FieldError;
}
