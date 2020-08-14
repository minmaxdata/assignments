import React from "react";
import "./tailwind.output.css";

const SignUpForm = ({ addUser }) => {
  const label_styles = ["text-gray-900 text-2xl font-bold mb-2"];
  const input_styles = [
    "shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  ];

  return (
    <>
      <Header
        first="Let's, "
        second="Sign Up"
        explanation="Use the form below to sign up for this super awesome service. You're
        only a few steps away!"
      ></Header>
      <form onSubmit={addUser}>
        <div className="mb-2 mt-3">
          <label htmlFor="firstName" className={`${label_styles}`}>
            First Name
          </label>
        </div>

        <input
          type="text"
          name="firstName"
          id="firstName"
          className={`${input_styles}`}
        ></input>

        <div className="mb-3 mt-4">
          <label htmlFor="email" className={`${label_styles}`}>
            Email Address
          </label>
        </div>
        <input
          type="text"
          name="email"
          id="email"
          className={`${input_styles}`}
        ></input>
        <div className="mb-3 mt-4">
          <label htmlFor="password" className={`${label_styles}`}>
            Password
          </label>
        </div>
        <input
          type="password"
          name="password"
          id="password"
          className={`${input_styles}`}
        ></input>
        <SubmitButton label="Sign Up" />
      </form>
    </>
  );
};

const SubmitButton = ({ label }) => {
  const button_styles = [
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-4 rounded focus:outline-none focus:shadow-outline",
  ];
  return (
    <div className="flex justify-end">
      <button className={`${button_styles}`} type="submit">
        {label}
      </button>
    </div>
  );
};
const Header = ({ first, second, explanation }) => {
  const header_styles = ["text-5xl text-gray-900 leading-tight"];
  return (
    <>
      <h1 className={`${header_styles}`}>
        {first} <div className="font-bold">{second}</div>
      </h1>
      <p className="mt-6"> {explanation}</p>
    </>
  );
};
const WelcomeUser = ({ user }) => {
  return (
    <>
      <Header
        first="Welcome, "
        second={user.firstName}
        explanation=" You have been registered for this awesome service. Please check your
        email below for instructions."
      ></Header>
      <div className="font-bold py-4"> {user.email}</div>
      <SubmitButton label="Sign In" />
    </>
  );
};

function App() {
  const current_user = { firstName: "", email: "", password: "" };
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [isNewUser, setIsNewUser] = React.useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const { firstName, email, password } = e.target;
    current_user.firstName = firstName.value;
    current_user.email = email.value;
    current_user.password = password.value;
    setUser(current_user);
    setIsNewUser(true);
    setLoading(false);
  };

  return (
    <section className="bg-white rounded-lg p-8 my-8 shadow-xl w-2/3 container mx-auto">
      {!isNewUser && <SignUpForm addUser={handleSubmit}></SignUpForm>}
      {isNewUser && <WelcomeUser user={user} />}
      {loading && <div>loading ... </div>}
    </section>
  );
}

export default App;
