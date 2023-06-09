import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './Sort.module.css';
import SortIcon from './sort.svg';
import cn from 'classnames';

export const Sort = ({ sort, setSort, className }: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)}>
            <span
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort == SortEnum.Rating
                })}
            >
                <SortIcon className={styles.sortIcon} />По рейтингу
            </span>

            <span
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort == SortEnum.Price
                })}
            >
                <SortIcon className={styles.sortIcon} />По цене
            </span>
        </div>
    );
};

interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortEnum,
    setSort: (sort: SortEnum) => void
}

export enum SortEnum {
    Rating,
    Price
}
