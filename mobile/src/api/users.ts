import { apiClient } from './client';
import { UserProfile } from '@rise/shared';

export const usersApi = {
  getProfile: async (): Promise<UserProfile> => {
    return apiClient.get<UserProfile>('/users/profile');
  },
};



