import { Row } from "../../constants/types";

type TableSectionProps = {
  item: Row;
};

const TableSection: React.FC<TableSectionProps> = ({ item }) => {
  const { Title: title, Rows: rows = [] } = item;
  return (
    <tbody data-testid="table-section">
      {title && (
        <tr className="section-header">
          <td className="table-data" colSpan={3}>
            {title}
          </td>
        </tr>
      )}
      {rows?.map((row, rowIndex) => (
        <tr
          className={row.RowType === "Row" ? "" : "summary-row"}
          key={rowIndex}
        >
          {row.Cells?.map((cell, cellIndex) => (
            <td className="table-data" key={cellIndex}>
              {cell.Value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableSection;
