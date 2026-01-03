import { ProductClient } from "@/features/dashboard/components/ProductClient";
import { Product } from "@/features/dashboard/types/dashboard.types";

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: Product[] = await res.json();
  return data;
}

export default async function DashboardPage() {
  const products = await fetchProducts();

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="text-sm text-muted-foreground">
          List of products from public API
        </p>
      </div>

      <ProductClient products={products} />
    </section>
  );
}
