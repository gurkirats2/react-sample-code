import {
  createApi,
  fetchBaseQuery,
  BaseQueryApi,
} from "@reduxjs/toolkit/query/react";
import { Environment } from "../common/constants/environment";

type AuthState = {
  auth: {
    token: string;
  };
};

const baseUrl = () => {
  return Environment.HOST + Environment.API_VERSION;
};

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl(),
  prepareHeaders: (
    headers: Headers,
    api: Pick<
      BaseQueryApi,
      "getState" | "endpoint" | "extra" | "type" | "forced"
    >
  ): Headers => {
    const token = (api.getState() as AuthState).auth.token;
    if (token) {
      headers.set("x-access-token", `${token}`);
    }
    return headers;
  },
  timeout: 40000,
});

const baseQueryInterceptor = async (args: any, api: any, options: any) => {
  const result = await baseQuery(args, api, options);
  if (result.error?.status === 401) {
    localStorage.clear();
  }
  return result;
};

export const GenericApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryInterceptor,
  endpoints: () => ({}),
  tagTypes: ["Auth"],
});
