import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import blog3 from '@/assets/blog3.jpg'
import { IoHome } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { FaBlog } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { GoDot } from "react-icons/go";
import { RouteBlog, RouteBlogByCategory, RouteCategoryDetails, RouteCommentDetails, RouteIndex, RouteUser } from "@/helpers/RouteName";
import { useFetch } from "@/hooks/useFetch";
import { getEnv } from "@/helpers/getEnv";
import { useSelector } from "react-redux";
const  AppSidebar = () => {
  const user = useSelector(state => state.user)

   const {data: categoryData} = useFetch(`${getEnv('VITE_API_BASE_URL')}/category/all-category`,
      {
        method: 'get',
        credentials:'include'
      } )
  return (
    <Sidebar>
      <SidebarHeader className='bg-gray-600 p-8'>
          {/* <img src={blog3} width={150} className="h-15 hover:border-black "/> */}
      </SidebarHeader>
      <SidebarContent className='bg-gray-600 text-white'>
        <SidebarGroup>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                      <IoHome />
                        <Link to={RouteIndex}>Home</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                
                {user && user.isLoggedIn
                ?<>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FaBlog />
                        <Link to={RouteBlog}>blogs</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FaRegComments />
                        <Link to={RouteCommentDetails}>Comments</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                </>
                :
                  <></>
                }
                {user && user.isLoggedIn && user.user.role === 'admin'
                ?<>
                <SidebarMenuItem >
                    <SidebarMenuButton>
                      <BiCategoryAlt/>
                        <Link to={RouteCategoryDetails}>Categories</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                    <SidebarMenuButton>
                      <TbUsers />
                        <Link to={RouteUser}>Users</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                </>
                :
                  <></>
                }

                
            </SidebarMenu>
        </SidebarGroup>


        <SidebarGroup>
          <SidebarGroupLabel className="text-white">
            Categories
          </SidebarGroupLabel>
          <SidebarMenu>
            {categoryData && categoryData.category.length>0
            && categoryData.category.map(category=> <SidebarMenuItem key={category._id}>
                    <SidebarMenuButton>
                      <GoDot />
                        <Link to={RouteBlogByCategory(category.slug)}>{category.name}</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem> )
            }
        </SidebarMenu>
        </SidebarGroup>
        
      </SidebarContent>
      <SidebarFooter className="bg-gray-600"/>
    </Sidebar>
  )
}
export default AppSidebar

