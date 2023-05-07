import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './Review.module.css';
import cn from 'classnames';
import UserIcon from './user.svg';
import { ReviewModel } from "../../interfaces/product.interface";
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Rating } from "../Rating/Rating";

export const Review = ({ review, className }: ReviewProps): JSX.Element => {
    const { name, title, description, createdAt, rating } = review;

    return (
        <div className={cn(styles.review, className)}>
            <UserIcon className={styles.user} />

            <div className={styles.title}>
                <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
                <span>{title}</span>
            </div>

            <div className={styles.date}>
                {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
            </div>

            <div className={styles.rating}>
                <Rating rating={rating} />
            </div>

            <div className={styles.description}>
                {description}
            </div>
        </div>
    );
};

interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: ReviewModel;
}
