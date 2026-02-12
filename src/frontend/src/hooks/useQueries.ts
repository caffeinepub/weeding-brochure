import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { CustomizationRequest } from '../backend';

export function useSubmitCustomization() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      designIdentifier,
      details,
    }: {
      designIdentifier: string | null;
      details: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      const id = `req-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      await actor.submitRequest(id, designIdentifier, details);
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customization-requests'] });
    },
  });
}

export function useGetAllRequests() {
  const { actor, isFetching } = useActor();

  return useQuery<CustomizationRequest[]>({
    queryKey: ['customization-requests'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllRequestsByTimestamp();
    },
    enabled: !!actor && !isFetching,
  });
}
