import baseApi from '../../service';

interface Department {
  name: string;
  id: number;
}

interface Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

interface CreateEmployeeBody {
  name: string;
  username: string;
  password: string;
  experience: number;
  departmentId: number;
  joiningDate: string;
  address: Address;
  role: string;
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

interface EditEmployeeBody {
  id: string;
  body: {
    name: string;
    username: string;
    experience: number;
    departmentId: number;
    joiningDate: string;
    address: Address;
    role: string;
    isActive: boolean;
  };
}

export const CreateEmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDepartmentById: builder.query<{ data: Department }, number>({
      query: (id) => `/department/${id}`
    }),
    getDepartmentList: builder.query<{ data: Department[] }, void>({
      query: () => '/department'
    }),
    getRolesList: builder.query<{ data: string[] }, void>({
      query: () => '/roles'
    }),
    createEmployee: builder.mutation<{ data: Employee }, CreateEmployeeBody>({
      query: (body: CreateEmployeeBody) => ({
        url: '/employees',
        method: 'POST',
        body
      })
    }),
    editEmployee: builder.mutation<{ data: Employee }, EditEmployeeBody>({
      query: (payload: EditEmployeeBody) => ({
        url: `/employees/${payload.id}`,
        method: 'PUT',
        body: payload.body
      })
    })
  })
});

export const {
  useGetDepartmentByIdQuery,
  useGetDepartmentListQuery,
  useCreateEmployeeMutation,
  useGetRolesListQuery,
  useEditEmployeeMutation,
  useLazyGetDepartmentByIdQuery
} = CreateEmployeeApi;

export default CreateEmployeeApi;
