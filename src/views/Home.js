import "./../App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import {FormControl, FormLabel} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { addUser, removeUser } from './../app/user/userSlice'
import List from "./List";
import {useSelector, useDispatch} from "react-redux";

function Home() {
    const [user, setUser] = React.useState({
        first_name: "Jitendra",
        last_name: "Sahu",
        mobile: "8887603331",
        email: "jitendra@gmail.com",
        gender: "M",
        qualification: "M",
    });

    const dispatch = useDispatch()

    const handleUserState = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        user[name] = value
        setUser(user);
    };

    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleSubmit = () => {
        console.log("user structure", user);
        dispatch(addUser(user));
        dispatch(removeUser(user));
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
                        <InputLabel htmlFor="qualification">Qualification</InputLabel>
                        <OutlinedInput
                            id="qualification"
                            name="qualification"
                            label="qualification"
                            spacing={2}
                            size="small"
                            value={user.qualification}
                            onChange={handleUserState}
                           
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
