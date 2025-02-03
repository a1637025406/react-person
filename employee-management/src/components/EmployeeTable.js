import { useState } from 'react';

const EmployeeTable = ({ employees, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              姓名
            </th>
            <th scope="col" className="px-6 py-3">
              性别
            </th>
            <th scope="col" className="px-6 py-3">
              年龄
            </th>
            <th scope="col" className="px-6 py-3">
              入职日期
            </th>
            <th scope="col" className="px-6 py-3">
              联系方式
            </th>
            <th scope="col" className="px-6 py-3">
              家庭住址
            </th>
            <th scope="col" className="px-6 py-3">
              操作
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{employee.name}</td>
              <td className="px-6 py-4">{employee.gender === 'Male' ? '男' : '女'}</td>
              <td className="px-6 py-4">{employee.age}</td>
              <td className="px-6 py-4">{employee.joinDate}</td>
              <td className="px-6 py-4">{employee.contact}</td>
              <td className="px-6 py-4">{employee.address}</td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => onEdit(employee)}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  </svg>
                </button>
                <button
                  onClick={() => onDelete(employee.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6h-3.172l1.214-1.213A1 1 0 0011 2H9zM4 6v10h2V6H4zm6 0v10h2V6h-2zm4 0v10h2V6h-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;