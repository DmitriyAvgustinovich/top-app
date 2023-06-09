import { Advantages, Htag, Product, Sort, SortEnum, Tag } from "../../components";
import { ProductModel } from "../../interfaces/product.interface";
import styles from './TopPageComponent.module.css';
import { HhData } from "../../components/HhData/HhData";
import { TopLevelCategory, TopPageModel } from "../../interfaces/page.interface";
import { useEffect, useReducer } from "react";
import { SortReducer } from "./sortReducer";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(SortReducer, { products, sort: SortEnum.Rating });

    useEffect(() => {
        dispatchSort({
            type: 'reset',
            initialState: products
        });
    }, [products]);

    if (!page) return <h2>Something went wrong</h2>;

    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='grey' size='medium'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>

            <div>
                {sortedProducts && sortedProducts.map(p => (<Product layout key={p._id} product={p} />))}
            </div>

            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                <Tag color='red' size='medium'>hh.ru</Tag>
            </div>

            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && <>
                <Htag tag={"h2"} >Преимущества</Htag>
                <Advantages advantages={page.advantages} />
            </>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
            <Htag tag={"h2"} >Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
        </div>
    );
};

interface TopPageComponentProps {
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}
