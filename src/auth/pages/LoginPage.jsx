import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { AuthLayout } from "../layouts/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container spacing={1} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <TextField
              label="email"
              type="email"
              placeholder="Type an email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              autoComplete="off"
              label="password"
              type="password"
              placeholder="Type a password"
              fullWidth
            />
          </Grid>

          <Grid container item spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Typography>Login</Typography>
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>

            <Grid container sx={{ mt: 1 }} direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Create new account
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
