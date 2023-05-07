import { Button, Htag, Input, Ptag, Rating, Tag, Textarea } from "../components";
import { useState } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <Ptag size='small'>Маленький</Ptag>
      <Ptag size='medium'>Средний</Ptag>
      <Ptag size='large'>Большой</Ptag>
      <Tag size='small'>Ghost</Tag>
      <Tag size='medium' color='red'>Red</Tag>
      <Tag size='small' color='green'>Green</Tag>
      <Tag color='primary'>Green</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder='тест' />
      <Textarea placeholder='тест' />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
