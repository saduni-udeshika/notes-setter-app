import { useDispatch } from 'react-redux';
import { deleteNote } from '../features/notes/noteSlice';
import { Link } from 'react-router-dom';

function NoteItem({ note }) {
   const dispatch = useDispatch();

   return (
      <div className="note">
         <div>{new Date(note.createdAt).toLocaleString('en-US')}</div>
         <h3>{note.title}</h3>
         <p>{note.description}</p>
         <a className="update-link">Update Details</a>
         <button onClick={() => dispatch(deleteNote(note._id))} className="close">
            X
         </button>
      </div>
   );
}

export default NoteItem;
