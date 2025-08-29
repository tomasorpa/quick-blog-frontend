import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../assets/assets";
import { DashboardCard } from "../components";
import { BlogTable, BlogTableItem } from "./admin";
import { useAppContext } from "../context/useAppContext";
import toast from "react-hot-toast";

export const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

const {axios}=useAppContext()

  const fetchDashboard = async () => {
   try {
     const { data } = await axios.get("/api/admin/dashboard")
     if (data.success) {
     setDashboardData(data.dashboardData)
     } else {
       toast.error(data.message);
     }
   } catch (error) {
     toast.error(error.message);
   }
  };
  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <section className="w-full p-4 md:p-5 lg:p-6 bg-blue-50/50">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
        <DashboardCard image={assets.dashboard_icon_1} title={"Blogs"} dashboardData={dashboardData.blogs} />
        <DashboardCard image={assets.dashboard_icon_2}
          title={"Comments"}
          dashboardData={dashboardData.comments}
        />
        <DashboardCard image={assets.dashboard_icon_3} title={"Drafts"} dashboardData={dashboardData.drafts} />
      </div>

      <div>
        <div className="flex items-center gap-4  text-gray-600 my-3.5 ">
          <img className="" src={assets.dashboard_icon_4} alt="" />
          <h1 className="text-xl font-bold text-gray-900">Latest Blogs</h1>
        </div>

        <BlogTable
          extraStyles={"max-h-[300px]"}
          dashboardData={dashboardData.recentBlogs}
          fetchDashboard={fetchDashboard}
        />
      </div>
    </section>
  );
};
