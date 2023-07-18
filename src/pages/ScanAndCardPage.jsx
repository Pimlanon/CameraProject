import Layout from '../layouts/Layout';
import { useState } from 'react';
import Head from '../components/ScanAndCards/Heads/Head';
import CreditCardForm from '../components/ScanAndCards/Forms/CreditCardForm';
//import BarcodeScanner from '../components/ScanAndCards/Scanners/Scanner';

function ScanAndCard() {
  const [cardDigits, setCardDigits] = useState(['']);
  const [selectedCard, setSelectedCard] = useState(['']);

  // -----------------------------------------------
  const handleSelectedCard = (e, index) => {
    const updatedSelectedCard = [...selectedCard];
    updatedSelectedCard[index] = e.target.value;
    setSelectedCard(updatedSelectedCard);
  };

  const handleAddSelectedCard = () => {
    setSelectedCard((prevSelectedCard) => [...prevSelectedCard, '']);
  };

  const handleDeleteSelectedCard = (index) => {
    setSelectedCard((prevSelectedCard) => {
      const updatedSelectedCard = [...prevSelectedCard];
      updatedSelectedCard.splice(index, 1);
      return updatedSelectedCard;
    });
  };

  // --------------------------------
  // *FOR CARD DIGIT'S INPUTS
  const handleCardDigit = (e, index) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue
      .replace(/\D/g, '')
      .slice(0, 16)
      .replace(/(\d{4})(?=\d)/g, '$1-');

    const updatedCardDigits = [...cardDigits];
    updatedCardDigits[index] = formattedValue;
    setCardDigits(updatedCardDigits);
  };

  const handleAddCardDigit = () => {
    setCardDigits((prevCardDigits) => [...prevCardDigits, '']);
  };

  const handleDeleteCardDigit = (index) => {
    setCardDigits((prevCardDigits) => {
      const updatedCardDigits = [...prevCardDigits];
      updatedCardDigits.splice(index, 1);
      return updatedCardDigits;
    });
  };

  // ----------------------------------------

  return (
    <Layout>
      <Head />

      <CreditCardForm
        selectedCard={selectedCard}
        handleSelectedCard={handleSelectedCard}
        handleAddSelectedCard={handleAddSelectedCard}
        handleDeleteSelectedCard={handleDeleteSelectedCard}
        cardDigits={cardDigits}
        handleCardDigit={handleCardDigit}
        handleAddCardDigit={handleAddCardDigit}
        handleDeleteCardDigit={handleDeleteCardDigit}
      />
    </Layout>
  );
}

export default ScanAndCard;
