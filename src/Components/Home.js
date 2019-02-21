import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
//REDUX
import { connect } from 'react-redux'

//CUSTOM COMPONENTS IMPORT
import SuperButton from '../Components/SuperButton';

//RESOURCES
import HomeBackground from '../Images/background.png';
import Logo from '../Images/logo.png';

class Home extends React.Component {

  render() {

    const { classes } = this.props;

    return (

      <div className={classes.main_container}>

      <Card className={classes.card} elevation={0}>
          <CardContent className={classes.card_content} elevation={0}>
             <Grid container spacing={16} alignItems="center" direction="column" justify="center">
                  <Grid item>
                    <div className={classes.logo}></div>
                  </Grid>
              </Grid>
              <Grid container spacing={16} alignItems="center" direction="column" justify="center">

                <SuperButton type="ok" nextView={2}/>

             </Grid>
        </CardContent>
      </Card>

      </div>
    );
  }
}

const styles = theme => ({
    main_container: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${HomeBackground})`,
        backgroundSize: 'cover',
    },
    card:{
        backgroundColor: "rgba(0,0,0,0)",
        width: 400,
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        },
    },
    card_content:{
        margin: 5,
        padding: 0,
    },
    logo:{
        backgroundImage: `url(${Logo})`,
        backgroundSize: 'cover',
        width: 300,
        height: 300,
        marginBottom: 15,
    },
})

const mapStateToProps = (state) => {
    return {
      currentView: state.currentView
    }
  }

export default connect(mapStateToProps)(withWidth()(withStyles(styles)(Home)))