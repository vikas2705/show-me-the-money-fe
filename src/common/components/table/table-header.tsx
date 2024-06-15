import { Row } from "../../constants/types";

type TableHeaderProps = {
  item: Row;
};

const TableHeader: React.FC<TableHeaderProps> = ({ item }) => {
  return (
    <thead data-testid="table-header">
      <tr className="tr">
        {item.Cells &&
          item.Cells.length > 0 &&
          item.Cells.map((cell, cellIndex) => (
            <th className="table-heading" key={cellIndex}>
              {cell.Value}
            </th>
          ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
