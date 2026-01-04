"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "@/features/dashboard/types/dashboard.types";

type Props = {
  products: Product[];
};

export function ProductTable({ products }: Props) {
  if (products.length === 0) {
    return <p className="text-sm text-muted-foreground">No products found.</p>;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="text-right">Brand</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.title}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.discountPercentage}</TableCell>
              <TableCell>{product.rating}</TableCell>
              <TableCell>{product.stock}</TableCell>
              {product.brand ? (
                <TableCell className="text-right">{product.brand}</TableCell>
              ) : (
                <TableCell className="text-right">No Brand</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
