import { useState } from "react";
import axios from "axios";

function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    const newFormData = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    };
    setFormData(newFormData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts`)
      .then((resp) => {
        console.log(resp.data)
      })
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Form blog post</h1>
          </div>
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="row gy-2">
                <div className="col-12 col-md-4">
                  <label className="form-label">Autore</label>
                  <input type="text"
                    name="author"
                    value={formData.author}
                    className="form-control"
                    placeholder="Autore"
                    onChange={handleChange} />
                </div>
                <div className="col-12 col-md-4">
                  <label className="form-label">Titolo</label>
                  <input type="text"
                    name="title"
                    value={formData.title}
                    className="form-control"
                    placeholder="Titolo"
                    onChange={handleChange} />
                </div>
                <div className="col-12 col-md-4">
                  <label className="form-label">Pubblico</label>
                  <div>
                    <input type="checkbox"
                      name="public"
                      checked={formData.public}
                      className="form-check-input"
                      onChange={handleChange} />
                  </div>
                </div>
                <div className="col-12">
                  <label className="form-label">Testo</label>
                  <textarea name="body" id="body" value={formData.body} className="form-control" placeholder="Descrizione" onChange={handleChange}></textarea>
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
