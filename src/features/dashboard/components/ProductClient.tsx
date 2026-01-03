"use client"

import { useMemo, useState } from "react"
import { ProductFilter } from "./ProductFilter"
import { ProductTable } from "./ProductTable"
import { ProductPagination } from "./ProductPagination"
import { ProductClientProps } from "../types/dashboard.types"

const ITEMS_PER_PAGE = 5

export function ProductClient({ products }: ProductClientProps) {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [products, search])

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  return (
    <>
      <ProductFilter search={search} onSearchChange={setSearch} />

      <ProductTable products={paginatedProducts} />

      <ProductPagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  )
}
