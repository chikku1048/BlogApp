import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [value, setValue] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setValue(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    return (
        <div className="Home">
          <div>
            <h2>Table</h2>
            <Table sx={{ minWidth: 650, border: '3px solid black' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ border: '2px solid black' }}>Name</TableCell>
                        <TableCell align="center" sx={{ border: '2px solid black' }}>Body</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {value.map((row) => (
                        <TableRow key={row.id} sx={{ border: '1px solid black' }}>
                            <TableCell align='center' sx={{ border: '1px solid black' }}>{row.title}</TableCell>
                            <TableCell align='center' sx={{ border: '1px solid black' }}>{row.body}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        </div>
    );
};

export default Home;