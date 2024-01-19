interface ISortProps {
  sort: string;
  setSort: (sort: any) => void;
}

const Sorter = ({ sort, setSort }: ISortProps) => {
  return (
    <select
      value={sort}
      onChange={(event) => {
        setSort(event.target.value);
      }}
      className="border border-blue-500 bg-white rounded-md m-2 p-2 hover:bg-blue-500 hover:text-white text-blue-500"
    >
      <option disabled value="">
        not sorted
      </option>
      <option value="price">price ascending</option>
      <option value="-price">price descending </option>
    </select>
  );
};
export default Sorter;

