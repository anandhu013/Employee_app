import baseApi from '../../service';

interface Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

interface Employee {
  id: string;
  name: string;
  username: string;
  password: string;
  experience: number;
  departmentId: number;
  joiningDate: string;
  address: Address;
  role: string;
  isActive: boolean;
}

export const employeeByIdApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeById: builder.query<{ data: Employee }, string>({
      query: (id) => `/employees/${id}`
    })
  })
});

export const { useGetEmployeeByIdQuery, useLazyGetEmployeeByIdQuery } = employeeByIdApi;

export default employeeByIdApi;
