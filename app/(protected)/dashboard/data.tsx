import { CustomTable } from "@/components/CustomTable";
import prisma from "@/db";

const data = async () => {
  const rows = await prisma.resource.findMany();
  const headers = ["ID", "Name", "Quantity", "Unit"];
  return <CustomTable headers={headers} rows={rows}></CustomTable>;
};

export default data;
