import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import CloseIcon from './close.svg';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import { useForm, Controller } from "react-hook-form";

export const ReviewForm = ({ productId, className }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)}>

                <Input
                    {...register('name', { required: { value: true, message: 'Заполните имя' } })}
                    placeholder='Имя'
                    error={errors.name}
                />

                <Input
                    {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
                    placeholder='Заголовок отзыва'
                    className={styles.title}
                    error={errors.title}
                />

                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name='rating'
                        rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
                        render={({ field }) => (
                            <Rating
                                isEditable
                                rating={field.value}
                                setRating={field.onChange}
                                ref={field.ref}
                                error={errors.rating}
                            />
                        )}
                    />
                </div>

                <Textarea
                    {...register('description', { required: { value: true, message: 'Заполните описание' } })}
                    placeholder='Текст отзыва'
                    className={styles.description}
                    error={errors.description}
                />

                <div className={styles.submit}>
                    <Button appearance='primary'>Отправить</Button>
                    <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>

            <div className={styles.success}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
                <CloseIcon className={styles.close} />
            </div>
        </form>
    );
};

interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productId: string;
}

interface IReviewForm {
    name: string;
    title: string;
    description: string;
    rating: number;
}