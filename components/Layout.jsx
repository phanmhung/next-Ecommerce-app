import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { createTheme } from '@material-ui/core/styles';

export default function Layout({ title, description, children }) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  return (
    <div>
      <Head>
        <title>{title ? `${title}- E-commerce` : 'E-commerce'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={useStyles().navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={useStyles().brand}>
                  E-commerce
                </Typography>
              </Link>
            </NextLink>
            <div className={useStyles().grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                Cart
              </NextLink>
              <NextLink href="/cart" passHref>
                Login
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={useStyles().main}>{children}</Container>
        <footer className={useStyles().footer}>
          <Typography>All rights reserved. E-commerce.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
