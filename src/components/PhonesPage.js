import React from 'react';
import { Link } from 'react-router-dom';

import getPhones from '../api/data';

class PhonesPage extends React.Component {
  state = {
    phones: [],
  };

  async componentDidMount() {
    const phonesFromServer = await getPhones();

    this.setState({ phones: phonesFromServer });
  }

  render() {
    const { phones } = this.state;

    return (
      <main>
        <ul className="card-list">
          {phones.map(phone => (
            <li className="card" key={phone.id}>
              <Link to={`/phones/${phone.id}`}>
                <img src={phone.imageUrl} alt="iMac" className="card__img" />
              </Link>
              <Link to={`/phones/${phone.id}`} className="card__link">
                <h2 className="card__title">{phone.name}</h2>
              </Link>
              <div className="card__code">{phone.snippet}</div>
              <div className="card__rating-container">
                <div className="star-rating">
                  <div className="star star_active" />
                  <div className="star star_active" />
                  <div className="star star_active" />
                  <div className="star star_active" />
                  <div className="star" />
                </div>

                <div className="text">Отзывов: 5</div>
              </div>
              <div className="card__price-container">
                <div className="text">Цена:</div>
                <div className="price">69 999 грн</div>
              </div>
              {/* eslint-disable-next-line */}
              <a href="#" className="card__add-to-cart">Купить</a>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
export default PhonesPage;
