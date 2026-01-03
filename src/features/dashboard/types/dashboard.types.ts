export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
};

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