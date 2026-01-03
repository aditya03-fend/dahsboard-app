export type AuthState = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};

export interface AuthCardProps {
    handleLogin: () => void
}