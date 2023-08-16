import baseApi from '../../service';

interface Employee {
  EmployeeName: string;
  joiningDate: string;
  Role: string;
  status: boolean;
  Experience: number;
  EmployeeId: string;
}

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<Employee[], void>({
      query: () => '/employees'
    })
  })
});

export const { useGetEmployeeListQuery } = employeeApi;

export default employeeApi;
