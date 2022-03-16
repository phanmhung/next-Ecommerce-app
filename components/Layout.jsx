import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title ? `${title}- E-commerce` : 'E-commerce'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={useStyles().navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={useStyles().brand}>E-commerce</Typography>
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
    </div>
  );
}
