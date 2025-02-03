import { useState } from 'react';

const EditForm = ({ employee, onUpdate, onCancel }) => {
  const [name, setName] = useState(employee.name);
  const [gender, setGender] = useState(employee.gender);
  const [age, setAge] = useState(employee.age);
  const [joinDate, setJoinDate] = useState(
    employee.joinDate ? new Date(employee.joinDate).toISOString().slice(0, 10) : ''
  );
  const [contact, setContact] = useState(employee.contact);
  const [address, setAddress] = useState(employee.address);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !joinDate || !contact || !address) {
      alert('请填写所有必填项');
      return;
    }

    onUpdate({
      ...employee,
      name,
      gender,
      age: parseInt(age),
      joinDate,
      contact,
      address,
    });
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">姓名</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">性别</label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="Male">男</option>
            <option value="Female">女</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">年龄</label>
          <input
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">入职日期</label>
          <input
            type="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={joinDate}
            onChange={(e) => setJoinDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">联系方式</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">家庭住址</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            取消
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            更新
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;