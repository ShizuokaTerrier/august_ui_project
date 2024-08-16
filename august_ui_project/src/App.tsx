import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  CardContent,
} from '@mui/material';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline>
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera className={classes.icon}></PhotoCamera>
            <Typography variant='h6'>
              August Material UI Practice Project
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth='sm' style={{ marginTop: '100px' }}>
              <Typography
                variant='h2'
                align='center'
                color='textPrimary'
                gutterBottom
              >
                Photo Album Project
              </Typography>
              <Typography
                variant='h5'
                align='center'
                color='textSecondary'
                paragraph
              >
                Here is where you say something inspiring about your photography
                efforts
              </Typography>
              <div className={classes.button}>
                <Grid container spacing={2} justifyContent='center'>
                  <Grid item>
                    <Button variant='contained' color='primary'>
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='outlined' color='primary'>
                      Another button
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image='https://picsum.photos/200/300'
                      title='Image Title'
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant='h5'>
                        {' '}
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card you can use this section to
                        describe the content
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>
                        View
                      </Button>
                      <Button size='small' color='primary'>
                        Edit
                      </Button>
                      <Button size='small' color='primary'>
                        Grumble
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant='h6' align='center' gutterBottom>
            This is a Square One Software Sample
          </Typography>
          <Typography variant='subtitle1' align='center' color='textSecondary'>
            What does this look like then?
          </Typography>
        </footer>
      </CssBaseline>
    </>
  );
}

export default App;
