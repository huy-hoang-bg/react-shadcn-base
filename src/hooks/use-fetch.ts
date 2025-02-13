import { useRequest } from 'ahooks'
import {
  Options,
  Plugin,
  Result,
  Service,
} from 'ahooks/lib/useRequest/src/types'
import { useSetAtom } from 'jotai'
import { isPageLoadingAtom } from '@/stores/is-page-loading-atom'

export function useFetch<TData, TParams extends unknown[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams> & {
    enablePageLoading?: boolean
  },
  plugins?: Plugin<TData, TParams>[]
): Result<TData, TParams> {
  const setIsPageLoading = useSetAtom(isPageLoadingAtom)
  const req = useRequest(
    service,
    {
      ...options,
      onBefore: (params) => {
        if (options?.enablePageLoading) {
          setIsPageLoading(true)
        }
        options?.onBefore?.(params)
      },
      onFinally(params, data, e) {
        if (options?.enablePageLoading) {
          setIsPageLoading(false)
        }
        options?.onFinally?.(params, data, e)
      },
      onError: (error: Error, params) => {
        // if (ErrorMessage[error?.body?.message]) {
        //   message.error(ErrorMessage[error?.body?.message]);
        // }
        if (options?.enablePageLoading) {
          setIsPageLoading(false)
        }
        options?.onError?.(error, params)
      },
      onSuccess(data, params) {
        if (options?.enablePageLoading) {
          setIsPageLoading(false)
        }
        options?.onSuccess?.(data, params)
      },
      // refreshOnWindowFocus:
      //     options?.refreshOnWindowFocus === undefined && !options?.manual,
    },
    [
      ...(plugins || []),
      () => {
        return {
          onCancel: () => {
            if (options?.enablePageLoading) {
              setIsPageLoading(false)
            }
          },
        }
      },
    ]
  )
  return req
}

export const cacheKey = {
  getMe: () => 'getMe',
  getUnitDetail: (unitId?: number) => `getUnitDetail-${unitId}`,
  getTokenUsageStatistical: (range: string) => `getTokenUsage-${range}`,
  getEncouragement: () => 'getEncouragement',
} as const
