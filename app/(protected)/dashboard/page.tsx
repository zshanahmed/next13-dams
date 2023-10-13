"use client";

import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import Button from "@mui/material/Button";
import { revalidatePath } from "next/cache";
import prisma from "@/db";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const headers = ["ID", "Name", "Quantity"];
  const units = ["lb", "ft", "yd", "oz", "gal", "qt", "pt", "c", "ml"];

  const handleSubmit = async (e: FormData) => {
    const resource = e.get("resource")?.toString();
    const quantity = e.get("quantity")?.toString();
    if (
      resource === undefined ||
      quantity === undefined ||
      units === undefined
    ) {
      throw new Error("Resource or quantity is undefined");
    }
    await prisma.resource.create({
      data: {
        name: resource,
        quantity: parseInt(quantity),
        unit: {
          connectOrCreate: {
            where: {
              name: unit,
            },
          },
        },
        user: {
          connect: {
            id: 1,
          },
        },
      },
    });
    revalidatePath("/dashboard");
  };

  return (
    <>
      <div className="p-[2rem]">
        <Typography variant="h3">Dashboard</Typography>
        <Typography paragraph>
          View the donations and submit a request to solicit resources.
        </Typography>
        <div className="mt-6">
          <form action={handleSubmit} className="flex flex-col gap-3">
            <FormControl>
              <InputLabel htmlFor="resource">Resource</InputLabel>
              <Input name="resource" id="resource" type="text" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="quantity">Quantity</InputLabel>
              <Input name="quantity" id="quantity" type="number" />
            </FormControl>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Unit</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Unit"
                onChange={(e) => router.push(`?unit=${e.target.value}`)}
              >
                {units.map((unit) => {
                  return (
                    <MenuItem key={unit.id} value={unit}>
                      {unit}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="p-[2rem] m-2">
        <Typography variant="h3">Donations</Typography>
      </div>
    </>
  );
};

export default Dashboard;
