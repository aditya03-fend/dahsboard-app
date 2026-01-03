import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import LoginPage from "@/app/(auth)/login/page"
import { useAuthStore } from "../stores/auth.store"

const pushMock = vi.fn()

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}))

describe("LoginPage", () => {
  beforeEach(() => {
    pushMock.mockClear()
    useAuthStore.setState({ isAuth: false })
  })

  afterEach(() => {
    cleanup()
  })

  it("should render login title and description", () => {
    render(<LoginPage />)

    expect(screen.getByText("Welcome")).toBeInTheDocument()
    expect(screen.getByText("Product Dashboard App")).toBeInTheDocument()
  })

  it("should render Sign In button", () => {
    render(<LoginPage />)

    const button = screen.getByRole("button", { name: /sign in/i })
    expect(button).toBeInTheDocument()
  })

  it("should login and redirect to /dashboard when Sign In clicked", () => {
    render(<LoginPage />)

    const button = screen.getByRole("button", { name: /sign in/i })
    fireEvent.click(button)

    expect(useAuthStore.getState().isAuth).toBe(true)
    expect(pushMock).toHaveBeenCalledWith("/dashboard")
  })
})
