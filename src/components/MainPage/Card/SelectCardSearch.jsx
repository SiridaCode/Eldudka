import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '../../Container/Container';

const SelectCardSearch = () => {
  let { search } = useParams();
  const { searchData } = useSelector(({ data }) => data);
  const value = searchData[search];
  const [eng, rus] = value.name.split('(');

  return (
    <div className="cards-wrapper">
      <Container>
        <div className="product-item-select">
          <div>{eng}</div>
          <div>{'(' + rus}</div>
          <div>{`Цена ${value.price} ₽`}</div>
          <div>{'Кулакова: ' + value.availability.kulakova ?? 'Нет'}</div>
          <div>{'Тухачевского: ' + value.availability.tuhach ?? 'Нет'}</div>
          <div>{'Шоколад: ' + value.availability.shokolad ?? 'Нет'}</div>
          <img
            src={value.pic ? value.pic : '../image-card.png'}
            className="product-item-image-text"
          />
          <a href="https://vk.com/vapestav" className="to-order">
            Заказать
          </a>
        </div>
      </Container>
    </div>
  );
};

export default SelectCardSearch;
