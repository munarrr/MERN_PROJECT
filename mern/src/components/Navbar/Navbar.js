
import React from 'react';
import Logo from '../../assets/img/logo.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {ThemeProvider,createMuiTheme} from '@material-ui/core'
import { withStyles } from '@material-ui/core';
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
     palette: {          
          main: {
               light: '#757ce8',
          }
     },
});

const StyledButton = withStyles({
     root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
     },
     label: {
          textTransform: 'capitalize',
     },
})(Button);
export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
            <ThemeProvider theme={theme}>
                 <AppBar position="static" color="secondary">
        <Toolbar>
                           <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <img src={Logo} alt="logo"/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           MERN CLOUD
          </Typography>
           <StyledButton>
                                <Button color="secondary"><NavLink to="/register">ВОЙТИ</NavLink></Button>
                                <Button color="inherit">ЛОГИН</Button>

           </StyledButton>
                           
                         
        </Toolbar>
      </AppBar>
            </ThemeProvider>
    </div>
  );
}
