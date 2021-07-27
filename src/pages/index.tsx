export default function Home() {
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
                  <input type="number" className="form-control" id="exampleFormControlInput1"></input>
                  <p className="card-text mt-2"><small className="text-muted">Entre</small></p>
                  <input type="number" className="form-control" id="exampleFormControlInput1"></input>
                  <p className="card-text mt-2"><small className="text-muted">e</small></p>
                  <input type="number" className="form-control" id="exampleFormControlInput1"></input>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                    <button type="button" className="btn text-white fw-bold" style={{ backgroundColor: '#fd7c59' }}>TESTAR SORTEIO </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
