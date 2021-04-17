import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { RadioGroup, Radio } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


function BasicTable() {
    const classes = useStyles();
    const [value, setValue] = useState([]);
    const fetchData = async () => {
        const result = await axios(
            'http://localhost:4000/book',
        );
        setValue(result.data.books)
    }

    useEffect(() => {

        fetchData()
    }, [])

    const [radio, setRadio] = React.useState([]);

    const handleChangeRadio = (event) => {
        setRadio(event.target.value);
        console.log(event.target.value);
    };
    return (
        <div>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="center">ISBN</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Publish Year</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            value.map((data) => {
                                return (
                                    <TableRow key={data.title}>

                                        <TableCell align="centra">
                                            <FormControl component="fieldset">

                                                <RadioGroup aria-label="female" name="female" value={radio} onChange={handleChangeRadio}  >
                                                    <FormControlLabel value={data._id} control={<Radio />} label={data.ISBN} />
                                                </RadioGroup>
                                            </FormControl>
                                        </TableCell>
                                        <TableCell align="left">{data.title}</TableCell>
                                        <TableCell align="right">{data.publishyear}</TableCell>
                                        <TableCell align="right">{data.price}</TableCell>
                                        <TableCell align="right">
                                            <Button variant="contained" color="primary">
                                                Details
                                            </Button>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button variant="contained" color="primary">
                                                Checkin
                                            </Button>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button variant="contained" color="primary">
                                                Checkout
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );

                            })}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default BasicTable;