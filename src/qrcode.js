import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import "./qrcode.css";

class QRCodeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      generatedQRCode: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  generateQRCode = () => {
    const { inputValue } = this.state;
    this.setState({ generatedQRCode: inputValue });
  };

  render() {
    const { inputValue, generatedQRCode } = this.state;

    return (
      <div className='QR-code'>
        <input
          type="text"
          placeholder="Enter website or product link"
          value={inputValue}
          onChange={this.handleInputChange}
          className='Link-box'
        />
        <button onClick={this.generateQRCode}>Generate QR Code</button>
        
        {generatedQRCode && (
          <div className='qr-code-container' >
            <p>Generated QR Code:</p>
            <QRCode value={generatedQRCode} />
          </div>
        )}
      </div>
    );
  }
}

export default QRCodeGenerator;