import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {Route, Routes} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

function User() {

    const user = useSelector((state) => state.userReducer.userList);

    console.log('user compoennt', user)

    return <h2>Users List</h2>;
}

export default User;
