import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import CloseIcon from './close.svg';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { API } from "../../helpers/api";

export const ReviewForm = ({ productId, className }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSendResponse>(API.review.createDemo, { ...formData, productId });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так');
            }
        } catch (e) {
            setError(e.message);
        }
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

            {isSuccess && <div className={cn(styles.success, styles.panel)}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>

                <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
            </div>}

            {error && <div className={cn(styles.error, styles.panel)}>
                Что-то пошло не так, попробуйте обновить страницу

                <CloseIcon className={styles.close} onClick={() => setError(undefined)} />
            </div>}
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

interface IReviewSendResponse {
    message: string;
}