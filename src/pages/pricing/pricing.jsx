import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Footer from "../../components/Footer";
import NavbarComponent from "../../components/NavbarComponent";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  cardContainer: {
    marginTop: "20px",

    marginBottom: "100px",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    marginTop: "50px",
  },
  cardHeader: {
    background: "orange",
    color: "white",
  },
  cardFooter: {
    textAlign: "center",
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}));

const tiers = [
  {
    title: "Free",
    price: "0",
    description: ["10 users included", "2 GB of storage", "Help center access", "Email support"],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavbarComponent />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facilis natus nihil
          doloremque dolore ratione
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" className={classes.cardContainer}>
        <Grid container spacing={2} style={{ marginBottom: "50px" }}>
          <Grid item xs={6} style={{ textAlign: "center" }}>
            <FormControl fullWidth>
              <InputLabel variant="outlined" id="demo-simple-select-label">
                Course
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="standard"
                label="Class"
                variant="outlined"
                fullWidth>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>ICSE</MenuItem>
                <MenuItem value={20}>CBSE</MenuItem>
                <MenuItem value={30}>JEE</MenuItem>
                <MenuItem value={40}>NEET</MenuItem>
                <MenuItem value={50}>BITSAT</MenuItem>
                <MenuItem value={60}>NSO</MenuItem>
                <MenuItem value={70}>KVPY</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "center" }}>
            <FormControl fullWidth>
              <InputLabel variant="outlined" id="demo-simple-select-label">
                Class
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="standard"
                label="Class"
                variant="outlined"
                fullWidth>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>8</MenuItem>
                <MenuItem value={20}>9</MenuItem>
                <MenuItem value={30}>10</MenuItem>
                <MenuItem value={40}>11 Science</MenuItem>
                <MenuItem value={50}>11 Commerce</MenuItem>
                <MenuItem value={60}>12 Science</MenuItem>
                <MenuItem value={70}>12 Commerce</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === "Enterprise" ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center", color: "white" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  {
                    // <Button fullWidth variant={tier.buttonVariant} color="primary"></Button>
                  }
                  <Container maxWidth="md" component="main" className={classes.cardFooter}>
                    {" "}
                    <Link
                      variant="outlined"
                      type="button"
                      className="btn login-btn mr-2"
                      style={{
                        width: "100%",
                        textDecoration: "none",
                        borderRadius: "10px",
                        borderColor: "orange",
                        alignSelf: "center",
                        "&:hover": {
                          background: "orange",
                          color: "white !important",
                        },
                      }}>
                      {tier.buttonText}
                    </Link>
                  </Container>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </React.Fragment>
  );
}
