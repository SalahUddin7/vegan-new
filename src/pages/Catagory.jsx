//NPM Packages
import { useParams } from 'react-router-dom';

export default function Category() {
  const { category } = useParams();

  return (
    <div id="category">
      <h1>This is Category Page</h1>
      <span>{category}</span>
    </div>
  );
}
