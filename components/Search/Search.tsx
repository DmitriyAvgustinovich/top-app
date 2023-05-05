import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './Search.module.css';
import GlassIcon from './glass.svg';
import cn from 'classnames';
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState } from "react";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            },
        });
    };

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                className={styles.input}
                placeholder='Поиск...'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            <Button
                appearance='primary'
                className={styles.button}
                onClick={goToSearch}
            >
                <GlassIcon />
            </Button>
        </div>
    );
};

interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }
