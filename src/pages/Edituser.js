import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { adduser,  getSingleUser } from "../redux/actions";
const Edituser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {id} = useParams()
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const [error, setError] = useState("");

  const { name, email, contact, address } = state;

  const { user } = useSelector((state) => state.users);

  const handleInput = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  useEffect(()=>{
    dispatch(getSingleUser(id))
  },[])

  useEffect(()=>{
    if(user){
      setState(...state)
    }
  },[user])
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !contact || !address) {
      setError("Please input all input Field");
    } else {
      dispatch(adduser(state));
      navigate("/");
      setError("");
    }
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20%",
      }}
    >
      <TextField
        id="filled-basic"
        label="Full Name"
        variant="filled"
        value={name}
        type={"text"}
        name='name'
        style={{
          width: "350px",
        }}
        onChange={handleInput}
      />
      <br />
      <TextField
        id="filled-basic"
        label="Enter Email"
        variant="filled"
        value={email}
        name='email'
        type={"email"}
        style={{
          width: "350px",
        }}
        onChange={handleInput}
      />
      <br />
      <TextField
        id="filled-basic"
        label="Enter Contact Details"
        variant="filled"
        value={contact}
        type={"text"}
        name='contact'
        style={{
          width: "350px",
        }}
        onChange={handleInput}
      />
      <br />
      <TextField
        id="filled-basic"
        label="Enter Address"
        variant="filled"
        value={address}
        type={"text"}
        name='address'
        style={{
          width: "350px",
        }}
        onChange={handleInput}
      />

<div>
        {
            error && <h3 style={{
                color:'red'
            }}>{error}</h3>
        }
        </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update
        </Button>
      </div>
    </Box>
  );
};

export default Edituser;
