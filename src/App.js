import "./App.css";
import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import List from "./views/List";

function App() {
    return (
        <Container>
            <Card variant="outlined">
                <CardContent>
                    <Grid container spacing={1} mb={2}>
                        <Grid item xs={12}>
                            <Link to="/">
                                <Button variant="contained">Create</Button>
                            </Link>{" "}
                            &nbsp;
                            <Link to="/list">
                                <Button variant="contained">List</Button>
                            </Link>
                        </Grid>
                    </Grid>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/list" element={<List />} />
                    </Routes>
                    
                </CardContent>
            </Card>
        </Container>
    );
}

export default App;
