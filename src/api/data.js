/* eslint-disable-next-line */
const API_URL = 'https://mate-academy.github.io/phone-catalogue-static/api/phones.json';

const getPhones = async() => {
  const response = await fetch(API_URL);

  return response.json();
};

export default getPhones;
