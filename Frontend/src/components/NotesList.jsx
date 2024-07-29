import { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Note from './Note'
import NoNotesIllustration from './NoNotesIllustration'
import PendingNotes from './PendingNotes'
import { useSelector, useDispatch } from 'react-redux'
import { getNotes, editNote, deleteNote } from '../redux/notesReducer'

export default function NotesList() {
  const sortedNotes = useSelector((state) => state.notes.sorted)
  console.log(sortedNotes)
  const pending = useSelector((state) => state.notes.pending)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  if (pending) return <PendingNotes />

  return (
    <Grid container spacing={2}>
      {sortedNotes.length === 0 ? (
        <NoNotesIllustration />
      ) : (
        sortedNotes.map((note) => (
          <Grid item xs={12} sm={6} key={note.id}>
            <Note
              note={note}
              onEdit={(note) => dispatch(editNote(note.id))}
              onDelete={(note) => dispatch(deleteNote(note.id))}
            />
          </Grid>
        ))
      )}
    </Grid>
  )
}
