import React from "react";

const Table = ({ formdata }) => {
  return (
    <div>
      <div className="mt-4">
        {/* <h2>Submitted Form Data</h2> */}
        <table className="table table-bordered  table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Marital Status</th>
              <th>Fruits</th>
              <th>Date of Birth</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {formdata.map((data, index) => (
              <tr
                key={index}
                className={index % 2 === !0 ? "table-primary" : ""}
              >
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.country}</td>
                <td>{data.gender}</td>
                <td>{data.status}</td>
                <td>
                  {Object.keys(data.fruits)
                    .filter((fruit) => data.fruits[fruit])
                    .join(", ")}
                </td>
                <td>{data.dob}</td>
                <td>{data.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
