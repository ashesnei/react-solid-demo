import type { Category } from '../../types';
import { useCapitalize } from '../../hooks/useCapitalize';

type Props = {
  selected: Category | 'all';
  onChange: (value: Category | 'all') => void;
};

const categories: (Category | 'all')[] = ['all', 'books', 'electronics', 'clothing'];

export function ProductFilter({ selected, onChange }: Props) {
  const capitalize = useCapitalize();
  return (
    <div>
      <label>Filtrar por Categoría: </label>
      <select value={selected} onChange={(e) => onChange(e.target.value as Category | 'all')}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === 'all' ? 'Todas' : capitalize(cat)}
          </option>
        ))}
      </select>
    </div>
  );
}
