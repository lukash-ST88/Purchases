import { ICategory } from "../models";

interface IFilterProps {
  categories: ICategory[];
  filter: number;
  setFilter: (filter: any) => void;
}

const Filter = ({ categories, filter, setFilter }: IFilterProps) => {
  return (
    <select
      value={filter}
      onChange={(event) => {
        setFilter(event.target.value);
        console.log(filter)
      }}
      className="border border-blue-500 bg-white rounded-md m-2 p-2 hover:bg-blue-500 hover:text-white text-blue-500"
    >
      <option disabled value="">
        not filtered
      </option>
      {categories.map((category: ICategory, index: number) => (
        <option key={index} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};
export default Filter;
