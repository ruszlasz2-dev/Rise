import { useQuery } from '@tanstack/react-query';
import { usersApi } from '../api/users';

export function useUserProfile() {
  return useQuery({
    queryKey: ['user', 'profile'],
    queryFn: () => usersApi.getProfile(),
    enabled: true, // Only fetch if authenticated
  });
}

