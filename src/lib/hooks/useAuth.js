"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  demoLogin,
  fetchCurrentUser,
  loginWithEmail,
  logout as logoutRequest,
  registerWithEmail,
} from "@/lib/api/auth.js";

export const AUTH_QUERY_KEY = ["auth", "me"];

export function useCurrentUser() {
  return useQuery({
    queryKey: AUTH_QUERY_KEY,
    queryFn: fetchCurrentUser,
    staleTime: 60 * 1000,
  });
}

export function useAuthMutations() {
  const queryClient = useQueryClient();

  const invalidate = () => queryClient.invalidateQueries({ queryKey: AUTH_QUERY_KEY });

  const login = useMutation({
    mutationFn: loginWithEmail,
    onSuccess: invalidate,
  });

  const register = useMutation({
    mutationFn: registerWithEmail,
    onSuccess: invalidate,
  });

  const demo = useMutation({
    mutationFn: demoLogin,
    onSuccess: invalidate,
  });

  const logout = useMutation({
    mutationFn: logoutRequest,
    onSuccess: invalidate,
  });

  return { login, register, demo, logout };
}
