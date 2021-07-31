import React, { useState } from 'react';
import Image from 'next/image'

import img from '../../public/sorteiogram.logo.png'


export default function Home() {
  const numbers = [];
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [result, setResult] = useState('') as any;

  const handleNumber1 = (number1) => {
    setNumber1(number1.target.value);
  }
  const handleNumber2 = (number2) => {
    setNumber2(number2.target.value);
  }
  const handleNumber3 = (number3) => {
    setNumber3(number3.target.value);
  }
  const handleResult = () => {
    for (let index = 0; index < parseInt(number1); index++) {
      numbers[index] = Math.floor(Math.random() * (parseInt(number3) - parseInt(number2) + 1)) + parseInt(number2);

    }
    const result = numbers.map(number => number.toString());
    const text = result + '';
    setResult(text);
  }
  var data = new Date();

  var year = data.getFullYear();

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#fd7c59' }}>
        <div className="navbar-brand p-3">
          <Image
            src={img}
            width={120}
            height={18}
          />
        </div>
      </nav>
      <div className="row">
        <div className="col-sm-12 d-flex justify-content-center mt-3">
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row">
              <div>
                <div className="card-body">
                  <h5 className="card-title">Sortear números</h5>
                  <p className="card-text text-center">Crie o sorteio de números facilmente utilizando essa opção, você poderá salvar o sorteio e compartilhar o link com outras pessoas.</p>
                  <p className="card-text"><small className="text-muted">O resultado terá quantos números?</small></p>
                  <input type="number" className="form-control" id="numberquant" name="number1" onChange={(number1) => handleNumber1(number1)} value={number1}></input>
                  <p className="card-text mt-2"><small className="text-muted">Entre</small></p>
                  <input type="number" className="form-control" id="number2" name="number2" onChange={(number2) => handleNumber2(number2)} value={number2}></input>
                  <p className="card-text mt-2"><small className="text-muted">e</small></p>
                  <input type="number" className="form-control" id="number3" name="number3" onChange={(number3) => handleNumber3(number3)} value={number3}></input>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                    <button type="button" className="btn text-white fw-bold" style={{ backgroundColor: '#fd7c59' }} onClick={() => handleResult()}>TESTAR SORTEIO </button>
                  </div>
                </div>
                {!result ? '' : <p className="p-2 fs-6 text-center fw-bold">Resultado: <br /><span className="text-muted fs-5">{result}</span></p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-muted fw-bold">Hantonny Korrea - {year}</p>
    </div >
  )
}
