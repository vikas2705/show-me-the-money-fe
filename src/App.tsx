import { useEffect, useState } from "react";
import "./App.css";
import Table from "./common/components/table";
import { SheetData } from "./common/constants/types";
import { getBalanceSheetData } from "./common/services/balance-sheet";

function App() {
  const [data, setData] = useState<SheetData>();

  const fetchData = async () => {
    getBalanceSheetData()
      .then((result) => {
        if (result.Reports?.length > 0) {
          setData(result.Reports[0]);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return null;
  }

  const { ReportTitles: reportTitles = [], Rows: rows = [] } = data;

  return (
    <div className="container" data-testid="container">
      {reportTitles.map((reportTitle, index) => {
        return (
          <h2
            className="heading"
            data-testid={`report-title-${index}`}
            key={index}
          >
            {reportTitle}
          </h2>
        );
      })}
      <Table data={rows ?? []} />
    </div>
  );
}

export default App;
