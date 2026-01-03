export type AuthState = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};
