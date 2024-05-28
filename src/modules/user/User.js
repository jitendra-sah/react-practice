import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {useSelector, useDispatch} from "react-redux";

function User() {

    //const [ users, setUsers] = React.useState([])
    const users = useSelector((state) => state.user.userList);

    React.useEffect(() => {
        // setUsers(reduxUsers)
        console.log("user compoennt", users);

        // return () => {
        //     connection.disconnect();
        // };
    }, []);
   

    
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Mobile</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Qualification</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.first_name} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                            <TableCell component="th" scope="row">
                                {user.first_name}
                            </TableCell>
                            <TableCell align="right">{user.last_name}</TableCell>
                            <TableCell align="right">{user.age}</TableCell>
                            <TableCell align="right">{user.mobile}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{user.qualification}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default User;
