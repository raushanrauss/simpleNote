import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { useStyles } from 'styles/AddNoteButtonStyle'
import { useDispatch } from 'react-redux'
import { toggleNotesForm } from 'redux/notesReducer'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from 'AuthContext/AuthContext'

export default function AddNoteButton() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        startIcon={<AddIcon />}
        onClick={() => user?dispatch(toggleNotesForm()):navigate('/login')}
      >
        Add note
      </Button>
    </>
  )
}
