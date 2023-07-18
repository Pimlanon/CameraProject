import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BarcodeContext } from '../../../context/BarcodeContext';
import { Form } from './CreditCardForm.styled';
import {
  AiOutlineScan,
  AiFillCloseCircle,
  AiOutlinePlus,
} from 'react-icons/ai';
import {
  ScanContainer,
  InputWrapper,
  CardContainer,
  CardType,
  IconContainer,
  Wrapper,
  CardNumber,
} from './CreditCardForm.styled';

function CreditCardForm({
  selectedCard,
  handleSelectedCard,
  handleAddSelectedCard,
  handleDeleteSelectedCard,
  cardDigits,
  handleCardDigit,
  handleAddCardDigit,
  handleDeleteCardDigit,
}) {
  const { barcode, setBarcode } = useContext(BarcodeContext);

  const handleBarcode = (e) => {
    const inputValue = e.target.value;
    let formattedValue = inputValue.slice(0, 13);

    setBarcode(formattedValue);
  };

  console.log('card digit : ' + cardDigits);
  console.log('card type : ' + selectedCard);
  console.log(barcode);

  return (
    <Form>
      <ScanContainer>
        <h2>ค้นหาสินค้า</h2>
        <label htmlFor="product-number">ใส่รหัสหรือสแกนบาร์โค้ดสินค้า</label>
        <InputWrapper>
          <input
            type="search"
            id="product-number"
            name="product-number"
            className="scan-input"
            placeholder="ค้นหาสินค้า"
            onChange={handleBarcode}
            value={barcode}
          />

          <Link to={'/barcode'}>
            <div className="scan-icon">
              <AiOutlineScan size={28} className="scan" />
            </div>
          </Link>
        </InputWrapper>
      </ScanContainer>

      <CardContainer>
        <CardType>
          <h2>ประเภทบัตรเครดิต</h2>
          <label htmlFor="CardType">เลือกบัตร</label>

          {selectedCard.map((value, index) => (
            <Wrapper key={index}>
              <select
                name="CardType"
                id={`CardType-${index}`}
                className="card-input"
                value={value}
                onChange={(e) => handleSelectedCard(e, index)}
              >
                <option value="" disabled={true}>
                  กรุณาเลือกบัตร
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <AiFillCloseCircle
                className="cross-mark"
                onClick={() => handleDeleteSelectedCard(index)}
              />
            </Wrapper>
          ))}

          <IconContainer onClick={handleAddSelectedCard}>
            <p>เพิ่มรายการ</p>
            <AiOutlinePlus className="icon-plus" />
          </IconContainer>
        </CardType>

        <CardNumber>
          <label>เลขบัตรเครดิต</label>

          {cardDigits.map((cardDigit, index) => (
            <Wrapper key={index}>
              <input
                type="text"
                placeholder="0000-0000-0000-0000"
                className="card-input"
                value={cardDigit}
                onChange={(e) => handleCardDigit(e, index)}
              ></input>

              <AiFillCloseCircle
                className="cross-mark"
                onClick={() => handleDeleteCardDigit(index)}
              />
            </Wrapper>
          ))}

          <IconContainer onClick={handleAddCardDigit}>
            <p>เพิ่มรายการ</p>
            <AiOutlinePlus className="icon-plus" />
          </IconContainer>
        </CardNumber>
      </CardContainer>

      <p className="check-text">*กรุณาตรวจสอบข้อมูลก่อนกดยืนยัน</p>
      <button>ยืนยัน</button>
    </Form>
  );
}

CreditCardForm.propTypes = {
  // handleBarcode: PropTypes.func.isRequired,
  selectedCard: PropTypes.array.isRequired,
  handleSelectedCard: PropTypes.func.isRequired,
  handleAddSelectedCard: PropTypes.func.isRequired,
  handleDeleteSelectedCard: PropTypes.func.isRequired,
  cardDigits: PropTypes.array.isRequired,
  handleCardDigit: PropTypes.func.isRequired,
  handleAddCardDigit: PropTypes.func.isRequired,
  handleDeleteCardDigit: PropTypes.func.isRequired,
};

export default CreditCardForm;
