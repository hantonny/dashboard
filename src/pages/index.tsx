import React, { useState } from 'react';
import Image from 'next/image'

import img from '../../public/sorteiogram.logo.png'

export default function Home() {
  const numbers = [];
  const names = [];
  const [number1, setNumber1] = useState('1');
  const [number2, setNumber2] = useState('1');
  const [number3, setNumber3] = useState('1');
  const [result, setResult] = useState<string>('');

  const [name, setName] = useState('');
  const [namequantity, setNameQuantity] = useState('1');
  const [resultName, setResultName] = useState<string>('');

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
  const handleResultName = () => {

    const nameSeparado = name.split(',');
    if (parseInt(namequantity) < nameSeparado.length) {
      for (let index = 0; index < parseInt(namequantity); index++) {
        const namesorteado = Math.trunc(Math.random() * nameSeparado.length);
        names[index] = nameSeparado[namesorteado];
      }
      const resultnames = names.map(name => name.toString());
      const textname = resultnames + '';
      setResultName(textname);
      console.log(names);
    } else {
      const resultnames = 'Quantidade de nomes insuficiente para o sorteio';
      const textname = resultnames + '';
      setResultName(textname);
    }

  }

  const handleInputNames = (name) => {
    setName(name.target.value);
  }

  const handleInputName = (namequantity) => {
    setNameQuantity(namequantity.target.value);
  }

  var data = new Date();
  var year = data.getFullYear();

  return (
    <>
      <nav className="navbar navbar-expand-lg justify-content-center" style={{ backgroundColor: '#fd7c59' }}>
        <div className="navbar-brand p-2">
          <Image
            src={img}
            width={120}
            height={20}
          />
        </div>
      </nav>
      <div className="row">
        <div className="col-sm-12 d-flex justify-content-center mt-3">
          <div className="card mb-3" style={{ maxWidth: '600px', width: '600px' }}>
            <div className="row">
              <div>
                <div className="card-body">
                  <h5 className="card-title">Sortear números</h5>
                  <p className="card-text text-justify">Crie o sorteio de números facilmente utilizando essa opção.</p>
                  <p className="card-text"><small className="text-muted">O resultado terá quantos números?</small></p>
                  <input type="number" className="form-control" id="numberquant" name="number1" onChange={(number1) => handleNumber1(number1)} value={number1} min={1}></input>
                  <p className="card-text mt-2"><small className="text-muted">Entre</small></p>
                  <input type="number" className="form-control" id="number2" name="number2" onChange={(number2) => handleNumber2(number2)} value={number2} min={1}></input>
                  <p className="card-text mt-2"><small className="text-muted">e</small></p>
                  <input type="number" className="form-control" id="number3" name="number3" onChange={(number3) => handleNumber3(number3)} value={number3} min={1}></input>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                    <button type="button" className="btn text-white fw-bold" style={{ backgroundColor: '#fd7c59' }} onClick={() => handleResult()}>TESTAR SORTEIO</button>
                  </div>
                </div>
                {
                  result ? <p className="fs-6 text-center fw-bold ps-4 pe-4"><span className="text-muted fs-5 text-justify">{isNaN(parseInt(result)) ? <p className="text-danger">Preencha o formulário corretamente!</p> : result}</span></p> : !number1 ? <p className="text-center fw-bold"><span className="fs-5 text-danger">Preencha o formulário corretamente!</span></p> : ''
                }
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 d-flex justify-content-center mt-3">
          <div className="card mb-3" style={{ maxWidth: '600px', width: '600px' }}>
            <div className="row">
              <div>
                <div className="card-body">
                  <h5 className="card-title">Sortear nomes</h5>
                  <p className="card-text text-justify">Crie o sorteio de nomes.</p>
                  <p className="card-text"><small className="text-muted">O resultado terá quantos nomes?</small></p>
                  <input type="number" className="form-control" id="numberNomes" name="numberNomes"
                    onChange={(namequantity) => handleInputName(namequantity)} value={namequantity} min={1}></input>
                  <p className="card-text mt-2"><small className="text-muted">Insira aqui os nomes separados por vírgula
                  </small></p>
                  <textarea name="names" id="names" cols={30} rows={10} className="form-control" onChange={(name) => handleInputNames(name)} style={{ resize: 'none', height: '100px' }}></textarea>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                    <button type="button" className="btn text-white fw-bold" style={{ backgroundColor: '#fd7c59' }} onClick={() => handleResultName()}>CRIAR SORTEIO DE NOMES</button>
                  </div>
                </div>
                {
                  !resultName ? '' : <p className="fs-6 text-center fw-bold ps-4 pe-4"><span className="text-muted fs-5 text-justify">{resultName}</span></p>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-muted fw-bold mt-2">Hantonny Korrea - {year}</p>
    </>
  )
}
