import SIGN_IN from "../common/constants/endpoints";
import { GenericApi } from "../http-handler/generic-api";
import { setToken, setUser } from "../state/slices/auth-slice";
interface Login {
  dispatch: any;
  queryFulfilled: any;
}

const onLoginStarted = async (_: any, { dispatch, queryFulfilled }: Login) => {
  try {
    const { data } = await queryFulfilled;
    dispatch(setToken(data.data.access_token));
    dispatch(
      setUser({
        accessToken: data.data?.access_token,
        user: data.data,
      })
    );
  } catch (_error) {
    console.error("Error", _error);
  }
};

export const authApi = GenericApi.injectEndpoints({
  endpoints: (builder) => ({
    // Login
    login: builder.mutation({
      query: (values) => {
        return {
          url: SIGN_IN.AUTH_LOGIN,
          method: "POST",
          body: values,
        };
      },
      onQueryStarted: onLoginStarted,
      invalidatesTags: ["Auth"],
    }),
    // Logout
    // logout: builder.mutation({
    //   query: (id) => ({
    //     url: `${EndPoints.LOGOUT}/${id}`,
    //     method: "PUT",
    //   }),
    //   async onQueryStarted(_, { dispatch, queryFulfilled }) {
    //     try {
    //       await queryFulfilled;
    //       dispatch(setLogout());
    //       setTimeout(() => {
    //         dispatch(baseApi.util.resetApiState());
    //       }, 1000);
    //     } catch (error) {
    //       // console.error(error);
    //     }
    //   },
    // }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation } = authApi;
