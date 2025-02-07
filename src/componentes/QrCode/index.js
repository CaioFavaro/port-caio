import React from 'react';
import { QRCodeCanvas } from 'qrcode.react'; 
import styles from './QrCode.module.css';

export default function QRCodeButton() {
  return (
    <div className={styles.qrCodeContainer}>
      <QRCodeCanvas value="https://www.linkedin.com/in/caio-favaro-de-oliveira-821379220/" size={100} />
    </div>
  );
}