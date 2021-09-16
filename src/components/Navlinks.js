import React from 'react'
import { Link } from 'react-router-dom'
import './Navlinks.css'
//Dialog imports
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
function Navlinks(){
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
  
    const toSignin =()=>{history.push('/Login')}
  const toSignup =()=>{history.push('/signup')} 
        //Open Dialog
    const handleClickOpen = () => {setOpen(true);};
    //close Dialog
    const handleClose = () => {setOpen(false);};
    return (
        <div className="navlinks">
            <div className="navlinks__outer">
                <div className="navlinks__inner">
                <Link to="/">Home </Link>
                <Link to="/about">About</Link>
                <Link>Contact</Link>
                <Link>Rooms</Link>
                <a  to="" onClick={handleClickOpen} color="inherit" >Book Now</a>
                </div>
            </div>
            <div>
          <Dialog open={open} onClose={handleClose}>
          <DialogTitle> Not logged in </DialogTitle>
          <DialogContent>
            <Typography variant="subtitle1">
                You need to login or Register first to view purchase history
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={toSignin} color="primary"> Login </Button>
            <Button onClick={toSignup} color="primary"> Register </Button>
          </DialogActions>
        </Dialog>
        </div>
        </div>
    )
}

export default Navlinks;