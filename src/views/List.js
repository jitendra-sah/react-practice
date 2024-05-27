import "./../App.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import {FormControl, FormLabel} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import User from "./../modules/user/User"
import {Link} from "react-router-dom";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

function List() {
    const [user, setUser] = React.useState({
        first_name: "Jitendra",
        last_name: "Sahu",
        mobile: "8887603331",
        email: "jitendra@gmail.com",
        gender: "M",
        qualification: "M",
    });

    const handleUserState = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setUser({
            [name]: value,
        });
    };

    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleSubmit = () => {
        console.log("user structure", user);
    };

    return (
        <div>
            <Grid container spacing={1} mb={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">Employee List</Typography>
                    <Divider></Divider>
                </Grid>
            </Grid>
            
            <User />
        </div>
    );
}

export default List;
