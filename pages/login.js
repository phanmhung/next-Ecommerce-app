import React from 'react';
import Layout from '../components/Layout';
import { Typography, List, ListItem, TextField, Link } from '@material-ui/core';
import useStyles from '../utils/styles';
import NextLink from 'next/link';

export default function Login() {
  const classes = useStyles();
  return (
    <Layout title="Login">
      <form className={classes.form}>
        <Typography component="h1" variant="h1">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              inputProps={{ type: 'email' }}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              inputProps={{ type: 'password' }}
            ></TextField>
          </ListItem>
          <ListItem>
            Don't have an account? &nbsp;
            <NextLink href="/register" passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
