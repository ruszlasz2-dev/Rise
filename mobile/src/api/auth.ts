import { apiClient } from './client';
import { User } from '@rise/shared';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/login', credentials);
    await apiClient.setAuthToken(response.access_token);
    return response;
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/register', data);
    await apiClient.setAuthToken(response.access_token);
    return response;
  },

  getProfile: async (): Promise<User> => {
    return apiClient.post<User>('/auth/me');
  },

  logout: async (): Promise<void> => {
    await apiClient.clearAuthToken();
  },
};



