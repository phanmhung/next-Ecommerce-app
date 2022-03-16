import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>e-commerce</title>
      </Head>
      <AppBar position="static" className={useStyles().navbar}>
        <Toolbar>
          <Typography>E-commerce</Typography>
        </Toolbar>
      </AppBar>
      <Container className={useStyles().main}>{children}</Container>
      <footer className={useStyles().footer}>
        <Typography>All rights reserved. E-commerce.</Typography>
      </footer>
    </div>
  );
}
