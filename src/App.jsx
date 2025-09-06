

function App() {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Hello world</h1>
          </div>
          <div className="col-12">
            <form>
              <div className="row">
                <div className="col-12 col-md-4">
                  <label className="form-label">Autore</label>
                  <input type="text"
                    className="form-control"
                    placeholder="Autore" />
                </div>
                <div className="col-12 col-md-4">
                  <label className="form-label">Titolo</label>
                  <input type="text"
                    className="form-control"
                    placeholder="Titolo" />
                </div>
                <div className="col-12 col-md-4">
                  <label className="form-label">Pubblico</label>
                  <div>
                    <input type="checkbox"
                      className="form-check-input" />
                  </div>
                </div>
                <div className="col-12">
                  <label className="form-label">Testo</label>
                  <textarea name="" id="" className="form-control" placeholder="Descrizione"></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-success">Salva</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
