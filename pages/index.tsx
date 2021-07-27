import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        <title>Create Next App</title>
      </Head>
      <main>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#fd7c59' }}>
          <div className="container">
            <a className="navbar-brand text-white">Sorteio<span className="fw-bold">Gram</span></a>
          </div>
        </nav>
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-5 ml-5">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </>
  )
}
