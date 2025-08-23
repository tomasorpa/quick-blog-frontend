import React from 'react'
import { BlogTableItem } from './';

export const BlogTable = ({extraStyles, dashboardData, fetchDashboard }) => {
  return (
    <div
      className={`${extraStyles} relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white`}
    >
      <table className="w-full text-sm text-gray-500">
        <thead className=" text-xs sticky top-0 bg-white z-10 text-gray-600 text-left uppercase">
          <tr>
            <th scope="col" className="px-2 py-4 sm:px-4">
              #
            </th>
            <th scope="col" className="px-2 py-4">
              Blog title
            </th>
            <th scope="col" className="px-2 py-4 max-sm:hidden ">
              Date
            </th>
            <th scope="col" className="px-2 py-4 max-sm:hidden ">
              Status
            </th>
            <th scope="col" className="px-2 py-4">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {dashboardData.map((blog, index) => (
            <BlogTableItem
              blog={blog}
              fetchDashboard={fetchDashboard}
              key={blog._id}
              index={index + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
