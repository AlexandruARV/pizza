import { useDispatch } from 'react-redux';
import { deleteItems } from './cartSlice';
import Button from '../../ui/Button';

function DeleteItem({ id }) {
  const dispatch = useDispatch();
  function handleDeleteItem() {
    dispatch(deleteItems(id));
  }
  return (
    <Button type="small" onClick={handleDeleteItem}>
      delete
    </Button>
  );
}

export default DeleteItem;
