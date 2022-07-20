import React from 'react';
export default function App() {
  const [name, setname] = React.useState('gaurav nasa');
  const [email, setemail] = React.useState('gaurav@nasa.com');
  const [phone, setphone] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [conffirmpassword, setconffirmpassword] = React.useState('');
  const [street, setstreet] = React.useState('');
  const [city, setcity] = React.useState('');
  const [state, setstate] = React.useState('');
  const [pincode, setpincode] = React.useState('');
  // console.log(React.useState('gaurav nasa'));
  // console.log(React.useState());
  const handlename = (e) => {
    // console.log(e.target.placeholder, e.target.value);
    setname(e.target.value);
  };
  const handleemail = (e) => {
    // console.log(e.target.placeholder, e.target.value);
    setemail(e.target.value);
  };
  const handlephone = (e) => {
    // console.log(e.target.placeholder, e.target.value);
    setphone(e.target.value);
  };
  const handlepassword = (e) => {
    // console.log(e.target.placeholder, e.target.value);
    setpassword(e.target.value);
  };
  const handleconffirmpassword = (e) => {
    // console.log(e.target.placeholder, e.target.value);
    setconffirmpassword(e.target.value);
  };
  const handlestreet = (e) => {
    // console.log(e.target.placeholder, e.target.value);
    setstreet(e.target.value);
  };
  const handlecity = (e) => {
    // console.log(e.target.placeholder, e.target.value);
    setcity(e.target.value);
  };
  const handlestate = (e) => {
    // console.log(e.target.placeholder, e.target.value);
    setstate(e.target.value);
  };
  const handlepincode = (e) => {
    // console.log(e.target.placeholder, e.target.value);
    setpincode(e.target.value);
  };

  const handlesubmit = () => {
    let ob = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      city: city,
      state: state,
      pincode: pincode,
      conffirmpassword: conffirmpassword,
    };
    console.log('data is ', ob);
  };
  return (
    <div>
      <h1>form</h1>
      <div>
        <input onChange={handlename} placeholder="name" value={name} />
        <input onChange={handleemail} placeholder="email" value={email} />
        <input onChange={handlephone} placeholder="phone" value={phone} />
        <input
          onChange={handlepassword}
          placeholder="password"
          value={password}
        />
        <input
          onChange={handleconffirmpassword}
          placeholder="conffirmpassword"
          value={conffirmpassword}
        />
        <input onChange={handlestreet} placeholder="street" value={street} />
        <input onChange={handlecity} placeholder="city" value={city} />
        <input onChange={handlestate} placeholder="state" value={state} />
        <input onChange={handlepincode} placeholder="pincode" value={pincode} />
        <button onClick={handlesubmit}>submit</button>
      </div>
    </div>
  );
}
