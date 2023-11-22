import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import Table from "./Table";
import { useState } from "react";

function App() {
  const [formdata, setformdata] = useState([]);

  const handleSubmit = (values) => {
    setformdata([...formdata, values]);
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <Form onSubmit={handleSubmit} />
          </div>
          <div className="col-md-6">
            <div className="mt-4">
              {/* <h2>Submitted Form Data</h2> */}
              <Table formdata={formdata} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
