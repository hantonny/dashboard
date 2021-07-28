import React, { useState } from 'react';

export default function Home() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [result, setResult] = useState(0);

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
    const interacao = Math.floor(Math.random() * (parseInt(number3) - parseInt(number2) + 1)) + parseInt(number2);
    setResult(interacao)
  }
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#fd7c59' }}>
        <div className="container-fluid">
          <h1 className="navbar-brand text-white fs-3"><span className="fst-normal">Sorteio</span><span className="fw-bold fs-2"><small>Gram</small></span></h1>
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
              </div>
            </div>
            {!result ? '' : <p className="text-center">{result}</p>}
          </div>
        </div>
      </div>
    </div >
  )
}
