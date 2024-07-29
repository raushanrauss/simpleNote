import Button from '@material-ui/core/Button'
import { useStyles } from 'styles/MockNotesButtonStyle'
import { useDispatch } from 'react-redux'
import { mockNotes } from 'redux/notesReducer'
import { useContext } from 'react'
import { AuthContext } from 'AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function MockNotesButton() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const{user}=useContext(AuthContext)
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() =>user? dispatch(mockNotes()):navigate('/login')}
      >
        MOCK NOTES
      </Button>
    </div>
  )
}
