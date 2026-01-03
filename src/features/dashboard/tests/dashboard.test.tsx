import { describe, it, expect, afterEach } from "vitest"
import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import { ProductClient } from "../components/ProductClient"
import { Product } from "../types/dashboard.types"

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Laptop Gaming",
    price: 1500,
    category: "electronics",
  },
  {
    id: 2,
    title: "Wireless Mouse",
    price: 50,
    category: "electronics",
  },
  {
    id: 3,
    title: "Office Chair",
    price: 200,
    category: "furniture",
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    price: 120,
    category: "electronics",
  },
  {
    id: 5,
    title: "Desk Lamp",
    price: 30,
    category: "furniture",
  },
  {
    id: 6,
    title: "Monitor 27 inch",
    price: 400,
    category: "electronics",
  },
]

afterEach(() => cleanup())

describe("Dashboard ProductClient", () => {
  it("should render product table with data", () => {
    render(<ProductClient products={mockProducts} />)

    expect(screen.getByText("Laptop Gaming")).toBeInTheDocument()
    expect(screen.getByText("Wireless Mouse")).toBeInTheDocument()
  })

  it("should filter products by search input", () => {
    render(<ProductClient products={mockProducts} />)

    const input = screen.getByPlaceholderText(/search product/i)
    fireEvent.change(input, { target: { value: "laptop" } })

    expect(screen.getByText("Laptop Gaming")).toBeInTheDocument()
    expect(screen.queryByText("Wireless Mouse")).not.toBeInTheDocument()
  })

  it("should paginate products", () => {
    render(<ProductClient products={mockProducts} />)

    expect(screen.getByText("Laptop Gaming")).toBeInTheDocument()
    expect(screen.queryByText("Monitor 27 inch")).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole("button", { name: /next/i }))

    expect(screen.getByText("Monitor 27 inch")).toBeInTheDocument()
  })

  it("should show empty state when no product matches filter", () => {
    render(<ProductClient products={mockProducts} />)

    const input = screen.getByPlaceholderText(/search product/i)
    fireEvent.change(input, { target: { value: "not-found" } })

    expect(
      screen.getByText(/no products found/i)
    ).toBeInTheDocument()
  })
})
