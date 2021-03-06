import React from 'react';
import { connect } from 'react-redux';
import {
  CardContainer,
  CardImage,
  CardTitle,
  CardContent,
  CardSubtitle,
} from './Card.styled';
import Button from '../Button';
import PhoneImage from '../PhoneImage';
import { showModal as showModalAction } from '../../redux/common/common-actions';
import { setSelectedPhone as setSelectedPhoneAction } from '../../redux/phones/phones-actions';

const Card = ({ phoneDetails, showModal, setSelectedPhone }) => {
  const { imageFileName, name, price } = phoneDetails;

  const handleClick = () => {
    setSelectedPhone(phoneDetails);
    showModal();
  };

  return (
    <CardContainer className='card--container'>
      <CardImage>
        <PhoneImage image={imageFileName}/>
      </CardImage>

      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{price}€</CardSubtitle>
      </CardContent>

      <Button onClick={() => handleClick()}>More Details</Button>
    </CardContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModalAction()),
  setSelectedPhone: props => dispatch(setSelectedPhoneAction(props)),
});

export default connect(null, mapDispatchToProps)(Card);
