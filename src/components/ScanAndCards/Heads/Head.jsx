import { useState, useEffect } from 'react';
import { Container, Text } from './Head.styled';

function Head() {
  const [branch, setBranch] = useState('');

  useEffect(() => {
    setBranch('เซ็นทรัลปิ่นเกล้า');
  }, []);

  return (
    <Container>
      <div className="p-logo"></div>
      <Text>
        <h1>บริษัท เพาเวอร์บาย จำกัด</h1>
        <h1>สาขา {branch}</h1>
      </Text>
    </Container>
  );
}

export default Head;
