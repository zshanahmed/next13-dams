import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { FC } from "react";

interface row {
  id: number;
  name: string;
  quantity: number;
  unit?: string;
}

interface TableProps {
  rows: row[];
  headers: string[];
}

export const CustomTable: FC<TableProps> = ({ headers, rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header} align="center">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">
                {row.quantity} {row.unit}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
