import React, { useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
// import MaterialTable from 'material-table';

function App() {
  const [people, setPeople] = useState("");
  const [headers, setHeaders] = useState([]);
  const apiURL =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  const fetchData = async () => {
    const response = await axios.get(apiURL);
    console.log(JSON.stringify(response.data, null, 2));
    setPeople(response.data);
    console.log(Object.keys(response.data[0]));
    setHeaders(Object.keys(response.data[0]));
    console.log(Object.values(response.data[0]));
  };

  return (
    <>
      <Button variant="primary">Primary</Button>{' '}
      {/* <Button className="fetch-button" onClick={fetchData}>
        Fetch Data
      </Button> */}
      {/* <Table striped bordered hover className="people">
        {headers &&
          headers.map((h, i) => {
            return <th>{h}</th>;
          })}
        {people &&
          people.map((person, index) => {
            const { id, name, email, role } = person;
            return (
              <tbody>
                <td className="person" key={index}>
                  {id}
                </td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
              </tbody>
            );
          })}
      </Table> */}
    </>
    // <MaterialTable
    //   title="People"
    //   columns={state.columns}
    //   data={state.data}
    //   editable={{
    //     onRowAdd: newData =>
    //       new Promise(resolve => {
    //         setTimeout(() => {
    //           resolve();
    //           const data = [...state.data];
    //           data.push(newData);
    //           setState({ ...state, data });
    //         }, 600);
    //       }),
    //     onRowUpdate: (newData, oldData) =>
    //       new Promise(resolve => {
    //         setTimeout(() => {
    //           resolve();
    //           const data = [...state.data];
    //           data[data.indexOf(oldData)] = newData;
    //           setState({ ...state, data });
    //         }, 600);
    //       }),
    //     onRowDelete: oldData =>
    //       new Promise(resolve => {
    //         setTimeout(() => {
    //           resolve();
    //           const data = [...state.data];
    //           data.splice(data.indexOf(oldData), 1);
    //           setState({ ...state, data });
    //         }, 600);
    //       }),
    //   }}
    // />
  );
}

export default App;
