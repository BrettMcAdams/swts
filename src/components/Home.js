import React from "react";
import video from "../videos/video.mp4";
import Textfield from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import "../styles/Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import explorers from "../images/explorers.jpg";
import naa from "../images/naa.png";
import naaSm from "../images/naaSmall.jpg";
import shoot from "../images/swts3.jpg";
import shooter from "../images/Shooter.png"

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    margin: 30,
    color: "#426744",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className="home">
      <div className="home__sponsor">
        <h2>Sponsored by:</h2>
        <div className="sponsor__image">
          <img
            className="imageLg"
            src={naa}
            alt="National Avation Academy Logo"
          />
          <img
            className="imageSm"
            src={naaSm}
            alt="National Avation Academy Logo"
          />
        </div>
      </div>
      <div
        className="home__video"
        dangerouslySetInnerHTML={{
          __html: `
                <video
                    loop
                    muted
                    controls
                >
                <source src=${video} type="video/mp4" />
                </video>`,
        }}
      />
      <section>
        <div className="section__welcome">
          <h2>Welcome to Shoot with the Stars</h2>
          <p>
            Shoot With The Stars is a Sporting Clays Event hosted by the
            Pinellas County Sheriff's Office, Pinellas County Sheriff's
            Citizen's Academy Alumni Association, & the Pinellas County
            Sheriff's Police Athletic League.
          </p>
          <Button
            size="large"
            style={{
              backgroundColor: "#426744",
              height: 60,
              width: 180,
              fontWeight: 400,
              fontSize: "1rem",
              color: "white",
            }}
            href=""
          >
            REGISTER
          </Button>
        </div>
      </section>
      <div className="cards">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              style={{
                textAlign: "center",
                padding: 10,
                fontWeight: 400,
              }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              What is Shoot With The Stars All About?
            </Typography>
            <CardMedia
              component="img"
              alt="Explorers"
              height="540"
              image={explorers}
              title="Explorers"
            />
            <Typography
              style={{
                textAlign: "center",
                paddingTop: 20,
                width: "80%",
                margin: "0 auto",
                fontSize: "1.05rem",
                lineHeight: "40px",
                color: "#426744",
                fontStyle: "italic",
                fontWeight: 400,
              }}
              variant="body2"
              color="textSecondary"
              component="h2"
            >
              Shoot With The Stars is a clay sporting competition sponsored by
              the Pinellas County Sheriff's Office, with all funds raised
              benefiting Pinellas PAL. Pinellas PAL (also known as Pinellas
              County Sheriff's Police Athletic League) is a 501(c)(3) Non Profit
              organization sponsored by the Pinellas County Sheriff's Office to
              work at-risk juveniles. All funds raised through Shoot With The
              Stars will benefit the youth development programs at Pinellas PAL.
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              style={{
                backgroundColor: "#426744",
                height: 60,
                width: "95%",
                fontWeight: 500,
                fontSize: "1.5rem",
                margin: "0 auto",
                marginTop: 10,
                marginBottom: 20,
                color: "white",
              }}
              size="large"
              color="primary"
            >
              Get In Touch
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="home__signUp">
        <div className="signUp">
          <h2>Register</h2>
          <img src={shoot} />
          <p>
            All Participants will Receive Breakfast, Lunch, a Gift Bag, Event
            Shirt, and Ammunition for the Competition. Each level of
            registration and sponsorship comes with different benefits. Compete
            alone or on a team of up to 4 people.
          </p>
          <Button
            size="large"
            style={{
              backgroundColor: "#426744",
              height: 60,
              width: 180,
              fontWeight: 400,
              fontSize: "1rem",
              color: "white",
            }}
            href=""
          >
            More Info
          </Button>
        </div>
        <div className="signUp">
          <h2>Sponsor</h2>
          <img src={shooter} />
          <p>
            This is one of our most popular services available. It’s made a big
            difference for many of our customers, and is provided with the
            highest level of excellence. With this service, we ensure all
            details are simple, seamless and handled in a timely manner.
          </p>
          <Button
            size="large"
            style={{
              backgroundColor: "#426744",
              height: 60,
              width: 180,
              fontWeight: 400,
              fontSize: "1rem",
              color: "white",
            }}
            href=""
          >
            More info
          </Button>
        </div>
      </div>
      <div className="home__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.518965607112!2d-82.43813868453003!3d28.28259940658203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2a4d3e6fbddbb%3A0xf3284ef6f6d482d6!2sEhren%20Cutoff%2C%20Land%20O&#39;%20Lakes%2C%20FL!5e0!3m2!1sen!2sus!4v1603305716894!5m2!1sen!2sus"
          height="400"
          style={{ border: 0 }}
          aria-hidden="false"
        ></iframe>
      </div>
      <div className="section__form">
        <h2>Subscribe to our mailing list</h2>
        <p>Fields marked with an asterisk (*) are required.</p>
        <FormControl>
          <Textfield id="standard-basic" label="First Name*" />
          <Textfield id="standard-basic" label="Last Name*" />
          <Textfield id="standard-basic" label="Email*" />
          <Button
            style={{
              backgroundColor: "#426744",
              height: 60,
              width: "100%",
              fontWeight: 500,
              fontSize: "1.5rem",
              margin: "0 auto",
              marginTop: 50,
              marginBottom: 30,
              color: "white",
            }}
            href=""
          >
            Submit
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default Home;
