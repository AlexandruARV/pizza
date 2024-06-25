import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

function EmptyCart() {
  return (
    <div className="mt-5 space-y-4 p-2">
      <Button to="/menu" type="primary">
        &larr; Back to menu
      </Button>

      <p className="font-bold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
