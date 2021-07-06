import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from '../img/quality-assurance.png'
import img2 from '../img/work-flow.png'
import img3 from '../img/support.png';
import "./Cardserv.css";
import { Grid } from '@material-ui/core';
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    
  },
});

export default function CardServ() {
   const cardImg = [
        {image: img2,title: "Support"},
        {image: img1,title: "Quality Assurance"},
        {image: img3,title: "Workflow"},
    ];

  const classes = useStyles();
 const renderCard = (Cardimg,index) => {
    return (
        <motion.div className="container" key={index}
        whileHover={{scale:1.1}}>
        <Grid container spacing={3}>
            <Grid  >
        <Card className={classes.root} id="service-card" >
          <CardActionArea >
            <CardMedia
              component="img"
              alt={Cardimg.title}
              height="250"
              image={Cardimg.image}
              title={Cardimg.title}
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="h2">
                {Cardimg.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
        </Grid>
        </motion.div>
      );
    }
    return <div className="cardServ1" > 
        {cardImg.map(renderCard)}
    </div>
    
}
