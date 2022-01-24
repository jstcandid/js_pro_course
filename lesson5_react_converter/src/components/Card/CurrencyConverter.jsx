import styles from './CurrencyConverter.module.css';
import { useState } from 'react';

import { Input } from '../Inputs/Input';
export function Converter() {
  const [byn, setValueByn] = useState(0);
  const [usd, setValueUsd] = useState(0);

  const onChangeUsd = (e) => {
    setValueUsd(e.target.value);
    setValueByn(e.target.value * 2.588);
  };

  const onChangeByn = (e) => {
    setValueByn(e.target.value);
    setValueUsd(e.target.value / 2.588);
  };
  return (
    <div className={`${styles.container}`}>
      <h3>Live currency converter</h3>
      <Input
        value={usd}
        text={'Enter currency in $, USD'}
        onChange={onChangeUsd}
      />
      <Input
        value={byn}
        text={'Enter currency in BYN'}
        onChange={onChangeByn}
      />
    </div>
  );
}
