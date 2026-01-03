export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
};

export type ProductTableProps = {
  products: Product[]
}

export type ProductClientProps = {
  products: Product[]
}

export type ProductFilterProps = {
  search: string
  onSearchChange: (value: string) => void
}

export type ProductPaginationProps = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
  className?: string;
}

export interface NavbarProps {
  onMenuClick?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}