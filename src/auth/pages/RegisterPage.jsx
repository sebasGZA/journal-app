import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layouts/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Create Account">
      <form>
        <Grid container spacing={1} sx={{ mt: 2 }}>
          <Grid item xs={12} md={12}>
            <TextField
              label="Name"
              type="name"
              placeholder="Type a name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="Type an email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              autoComplete="off"
              label="Password"
              type="password"
              placeholder="Type a password"
              name="password"
              fullWidth
            />
          </Grid>

          <Grid container item spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" fullWidth>
                <Typography>Create</Typography>
              </Button>
            </Grid>

            <Grid container sx={{ mt: 1 }} direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}>have an account yet? </Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Login
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
