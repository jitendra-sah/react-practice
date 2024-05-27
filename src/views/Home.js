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
import {Link} from "react-router-dom";
import List from "./List";

function Home() {
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

    const myStyle = {
        marginTop: "5px;",
    };

    return (
        <div>
            <Grid container spacing={1} mb={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">Employee Registration Form</Typography>
                    <Divider></Divider>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={6} md={6}>
                    <FormControl fullWidth>
                        <TextField
                            label="First Name"
                            id="first_name"
                            name="first_name"
                            size="small"
                            defaultValue={user.first_name}
                            onChange={handleUserState}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={6} md={6}>
                    <FormControl fullWidth>
                        <TextField
                            label="Last Name"
                            id="last_name"
                            name="last_name"
                            size="small"
                            defaultValue={user.last_name}
                            onChange={handleUserState}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl fullWidth>
                        <TextField
                            label="Mobile"
                            id="mobile"
                            name="mobile"
                            size="small"
                            defaultValue={user.mobile}
                            onChange={handleUserState}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl fullWidth>
                        <TextField
                            label="Email"
                            id="email"
                            name="email"
                            size="small"
                            defaultValue={user.email}
                            onChange={handleUserState}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={6}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>

                        <Select
                            labelId="demo-simple-select-label"
                            id="gender"
                            value={user.gender}
                            label="Age"
                            onChange={handleChange}
                            size="small"
                        >
                            <MenuItem value={"M"}>Male</MenuItem>
                            <MenuItem value={"F"}>Female</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6} md={6}>
                    <FormControl fullWidth size="small">
                        <InputLabel htmlFor="outlined-adornment-qualification">Qualification</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-qualification"
                            label="qualification"
                            spacing={2}
                            size="small"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <Button variant="contained" size="small" onClick={handleSubmit}>
                            Register
                        </Button>
                    </FormControl>
                </Grid>
            </Grid>

            {/* List of user list start */}
            <div className="mt3">
                <List />
            </div>

            {/* List of user list end */}
        </div>
    );
}

export default Home;
