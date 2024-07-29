import  { useContext } from 'react';
import ControlButtonsContainer from './ControlButtonsContainer';
import AddNoteButton from './AddNoteButton';
import ProgressionIndicator from './ProgressionIndicator';
import NotesList from './NotesList';
import NotesForm from './NotesForm';
import LogoutButton from './LogoutButton';
import Grid from '@material-ui/core/Grid';
import { AuthContext } from '../AuthContext/AuthContext';
import SearchBox from './SearchBox';
import { useStyles } from '../styles/SearchInputStyle';

const Home = () => {
    const classes = useStyles();
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="column" className="notes">
                <Grid item xs={12}>
                    <SearchBox />
                </Grid>
                <Grid item container>
                    <Grid item sm={9} xs={12} container>
                        <ControlButtonsContainer />
                    </Grid>
                    <Grid item sm={3} xs={12}>
                         <AddNoteButton />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <ProgressionIndicator />
                </Grid>
                <Grid item xs={12}>
                    <NotesList />
                </Grid>
                <Grid item xs={12}>
                    {user && <LogoutButton />}
                </Grid>
            </Grid>
            <NotesForm />
        </div>
    );
}

export default Home;
