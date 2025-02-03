import { useEffect, useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
import Pagination from './components/Pagination';
import EditForm from './components/EditForm';
import AddEmployeeForm from './components/AddEmployeeForm';
import 'tailwindcss/tailwind.css';
import employeesData from './data/employees.json';

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // 初始化数据
  useEffect(() => {
    setEmployees(employeesData);
  }, []);

  // 添加员工
  const handleAdd = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
    setShowAddForm(false);
  };

  // 删除员工
  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  // 更新员工
  const handleUpdate = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
    setEditingEmployee(null);
  };

  // 编辑员工
  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  // 计算分页
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 py-8">
        员工管理系统
      </h1>
      <div className="max-w-6xl w-full">
        {editingEmployee ? (
          <EditForm
            employee={editingEmployee}
            onUpdate={handleUpdate}
            onCancel={() => setEditingEmployee(null)}
          />
        ) : showAddForm ? (
          <AddEmployeeForm
            onAdd={handleAdd}
            onCancel={() => setShowAddForm(false)}
          />
        ) : (
          <div>
            <div className="mb-8 flex justify-end">
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                添加员工
              </button>
            </div>
            <EmployeeTable
              employees={currentItems}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;