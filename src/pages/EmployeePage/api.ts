import baseApi from '../../service';

interface Employee {
  name: string;
  username: string;
  joiningDate: string;
  role: string;
  isActive: boolean;
  experience: number;
  id: string;
}

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<{ data: Employee[] }, void>({
      query: () => '/employees',
      providesTags: ['xyz']
    }),
    deleteEmployee: builder.mutation<{}, string>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['xyz']
    })
  })
});

export const { useGetEmployeeListQuery, useDeleteEmployeeMutation, useLazyGetEmployeeListQuery } =
  employeeApi;

export default employeeApi;
