import { Input } from "@/components/ui/input"
import { ProductFilterProps } from "@/features/dashboard/types/dashboard.types"

export function ProductFilter({ search, onSearchChange }: ProductFilterProps) {
  return (
    <Input
      placeholder="Search product"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      className="max-w-sm"
    />
  )
}
