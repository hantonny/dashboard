import React, { useState } from 'react';
import Image from 'next/image'

import img from '../../public/sorteiogram.logo.png'

export default function Home() {
  const numbers = [];
  const [number1, setNumber1] = useState('1');
  const [number2, setNumber2] = useState('1');
  const [number3, setNumber3] = useState('1');
  const [result, setResult] = useState<string>('');

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
          <div className="card mb-3" style={{ maxWidth: '600px' }}>
            <div className="row">
              <div>
                <div className="card-body">
                  <h5 className="card-title">Sortear números</h5>
                  <p className="card-text text-justify">Crie o sorteio de números facilmente utilizando essa opção, você poderá salvar o sorteio e compartilhar o link com outras pessoas.</p>
                  <p className="card-text"><small className="text-muted">O resultado terá quantos números?</small></p>
                  <input type="number" className="form-control" id="numberquant" name="number1" onChange={(number1) => handleNumber1(number1)} value={number1}></input>
                  <p className="card-text mt-2"><small className="text-muted">Entre</small></p>
                  <input type="number" className="form-control" id="number2" name="number2" onChange={(number2) => handleNumber2(number2)} value={number2}></input>
                  <p className="card-text mt-2"><small className="text-muted">e</small></p>
                  <input type="number" className="form-control" id="number3" name="number3" onChange={(number3) => handleNumber3(number3)} value={number3}></input>
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
        <div className="col-sm-12 d-flex justify-content-center mt-2">
          <div className="card mb-3" style={{ maxWidth: '600px' }}>
            <div className="row">
              <div>
                <div className="card-body">
                  <h5 className="card-title">Sortear nomes</h5>
                  <p className="card-text text-justify">Crie o sorteio de nomes, você poderá inserir manualmente ou fazer o upload de um arquivo com os nomes para realizar o sorteio.</p>
                  <p className="card-text"><small className="text-muted">O resultado terá quantos nomes?</small></p>
                  <input type="number" className="form-control" id="numberNomes" name="numberNomes"></input>
                  <p className="card-text mt-2"><small className="text-muted">Insira aqui um nome por linha</small></p>
                  <textarea name="" id="" cols={30} rows={10} className="form-control"></textarea>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                    <button type="button" className="btn text-white fw-bold" style={{ backgroundColor: '#fd7c59' }}>CRIAR SORTEIO DE NOMES</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-muted fw-bold">Hantonny Korrea - {year}</p>
    </div >
  )
}
