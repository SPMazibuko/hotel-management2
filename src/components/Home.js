import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import bed from '../resources/bed.jpg';
import serve from '../resources/serve.jpg';
import view from '../resources/view.jpg';
import presidential from '../resources/presidential.jpg';
import luxury from '../resources/luxury.jpg'
import delux from '../resources/delux.jpg'
import './Home.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Home(){
  const classes = useStyles();

    return(
      <>
          <div className="home">
            <h1 style={{color:'#FFF', fontSize:'60px',fontWeight:'800' ,paddingTop:'100px', textAlign:'center'}}>
              Welcome To Our Most Trusted Hotel Management Site.
            </h1>
            <h3 style={{color:'#FDF7F7', fontSize:'36px'}}>Let Us Help You Plan Your Next Trip.</h3>
            <Button variant="contained" color="primary" size="large">
                Book Now
            </Button>
        </div>
{/*About*/}
        <div className="home__about">
          <div style={{textAlign:"start", maxWidth:"30%", padding:"40px"}}>
              <h2 style={{color:"#484747", fontSize:"36px"}}>Best Services</h2>
              <p  style={{color:"#484747", fontSize:"23px"}}>we strive to deliver the best services, from the best rooms to the food</p>
              <Button variant="contained" color="primary" size="large">
                More About Us
            </Button>
          </div>
          <div className="pictures" style={{padding:"40px"}}>
            <img src={serve} alt="Cleaners Making Bed" width="250px" height="250px"style={{zIndex:"2", position: 'absolute',marginTop:"30px", marginLeft:"90px"}}/>
            <img src={view} alt="Cleaners Making Bed" width="200px" height="200px" style={{zIndex:"3", position: 'absolute',marginTop:"200px", marginLeft:"300px"}}/>
            <img src={bed} alt="Cleaners Making Bed" width="280px" height="280px" style={{zIndex:"1", marginLeft:"300px"}}/>
          </div>
        </div>
{/*Featured Rooms*/}
        <div className="home__rooms">
          <div style={{padding:'20px'}}>
           <h1 style={{fontFamily:'sans-serif', paddingTop:'10px'}}>Featured Rooms</h1>
      <div style={{display: 'flex',float: 'left',marginBottom: '16px',padding: '10px 30px 30px 30px'}}>
           {/*Presidential Room*/}
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={presidential}
          title="Presidential rooms"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Presidential rooms
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            2 Guests
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This VIP room can take up to 2 guests room service and WiFi is available
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained"> 
          Book Now
        </Button>
      </CardActions>
    </Card>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
{/*Luxury Room*/}
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={luxury}
          title="Luxury rooms"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Luxury rooms
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            2 Guests
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This room can take up to 2 guests room service and WiFi is available
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained"> 
          Book Now
        </Button>
      </CardActions>
    </Card>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {/*Delux Room*/}
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={delux}
          title="Delux rooms"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Delux Rooms
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            2 Guests
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This room can take up to 2 guests, it has two separate beds, WiFi is available
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained"> 
          Book Now
        </Button>
      </CardActions>
    </Card>
    </div>
            </div>
        </div>
      </>
    );
}

export default Home;