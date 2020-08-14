import React from "react";
import ReactDOM from "react-dom";
//https://codesandbox.io/s/phonebook-xd3em
const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  return (
    <form onSubmit={addEntryToPhoneBook} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
      />

      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        s
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable({ entries, errors }) {
  const entryRow = (entry, index) => {
    return (
      <tr key={index}>
        <td>{entry.userFirstname}</td>
        <td>{entry.userLastname}</td>
        <td>{entry.userPhone}</td>
      </tr>
    );
  };
  return (
    <div>
      <table style={style.table} className="informationTable">
        <thead>
          <tr>
            <th style={style.tableCell}>First name</th>
            <th style={style.tableCell}>Last name</th>
            <th style={style.tableCell}>Phone</th>
          </tr>
          {!errors &&
            entries.map((entry) => {
              return entryRow(entry);
            })}
        </thead>
      </table>
      {errors ? <div> Entry not added to phone book</div> : ""}
    </div>
  );
}

function Application(props) {
  const entry = { userFirstname: "", userLastname: "", userPhone: "" };
  const [entries, setEntries] = React.useState([]);
  const [error, setError] = React.useState(false);

  const handleEntryFormSubmit = (e) => {
    e.preventDefault();
    //todo : phone number formatting
    const { userFirstname, userLastname, userPhone } = e.target;
    entry.userPhone = userPhone.value;

    entry.userLastname = userLastname.value;
    entry.userFirstname = userFirstname.value;
    setEntries([...entries, { ...entry }]);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={handleEntryFormSubmit} />
      <InformationTable entries={entries} errors={error} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
