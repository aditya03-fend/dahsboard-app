import { ProductClient } from "@/features/dashboard/components/ProductClient";
import { Product } from "@/features/dashboard/types/dashboard.types";

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  
  return data.products; 
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
