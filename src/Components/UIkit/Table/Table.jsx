 
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Table.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  // Fungsi ini akan menangkap error yang terjadi di komponen anak
  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorInfo: info
    });
    // Kamu bisa juga mengirim error ke server atau logging service di sini
    console.log("Error captured:", error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

const TableHeader = ({ column, onSort, sortOrder, sortColumn }) => {
  const isActive = column === sortColumn;
  return (
    <th className={isActive ? "active" : ""} onClick={() => onSort(column)}>
      {column}
      {isActive && (
        <i
          className={`fa-solid fa-arrow-${sortOrder === "asc" ? "up" : "down"}`}
        />
      )}
    </th>
  );
};

export const Table = ({ rows, columns }) => {
  const [sortColumn, setSortColumn] = useState(columns[0]);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedRows = [...rows].sort((a, b) => {
    const [valA, valB] = [a[sortColumn], b[sortColumn]];
    return typeof valA === typeof valB
      ? sortOrder === "asc"
        ? valA > valB
          ? 1
          : -1
        : valA < valB
        ? 1
        : -1
      : 0;
  });

  const handleSort = (column) => {
    console.log("name", column);
    setSortColumn(column);
    setSortOrder(
      sortColumn !== column ? "asc" : sortOrder === "asc" ? "desc" : "asc"
    );
  };

  return (
    <table className="table-2">
      <thead>
        <tr>
          {columns.map((column) => (
            <TableHeader
              key={column}
              column={column}
              onSort={handleSort}
              sortColumn={sortColumn}
              sortOrder={sortOrder}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function TableApp() {
  return (
    <ErrorBoundary fallback="an error occurred">
      <Table rows={[]} columns={[]} />
    </ErrorBoundary>
  );
}