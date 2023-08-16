import baseApi from '../../service';
type login_payload = {
  username: string;
  password: string;
};

export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: login_payload) => ({
        url: '/employees/login',
        method: 'POST',
        body
      })
    })
  })
});

export const { useLoginMutation } = loginApi;

export default loginApi;
