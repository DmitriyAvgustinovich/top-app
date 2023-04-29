import { Button, Htag, Ptag, Raiting, Tag } from "../components";
import React, { useState } from "react";

export default function Home(): JSX.Element {
  const [raiting, setRaiting] = useState<number>(4);

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
      <Raiting raiting={raiting} isEditable setRaiting={setRaiting} />
    </>
  );
}
