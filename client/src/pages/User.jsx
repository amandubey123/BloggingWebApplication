import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RouteAddCategory, RouteEditCategory } from "@/helpers/RouteName";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFetch } from "@/hooks/useFetch";
import { getEnv } from "@/helpers/getEnv";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteData } from "@/helpers/handleDelete";
import { showToast } from "@/helpers/showToast";
import user1 from '@/assets/image/user1.png'
import moment from "moment";

const User = () => {

  const [refreshData, setRefreshData] = useState(false)
   
     const {data, loading ,error} = useFetch(`${getEnv('VITE_API_BASE_URL')}/user/get-all-user`,
    {
      method: 'get',
      credentials:'include'
    } , [refreshData])
    
    const handleDelete = async(id) => {
      const response = await deleteData(`${getEnv('VITE_API_BASE_URL')}/user/delete/${id}`)
      if(response){
        setRefreshData(!refreshData)
        showToast('success','Data deleted.')
      }else{
        showToast('error','Data not deleted')
      }
    }
    


  return (
    <div>
      <Card className="bg- bg-gray-600 text-white">
        
        <CardContent>
          <Table>
            
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Avatar</TableHead>
                <TableHead>Dated</TableHead>
                <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
              {data && data.user.length > 0 ?
                 
                 data.user.map(user =>
                  <TableRow key={user._id}>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <img src={user.avatar || user1} className="w-10"/>
                  </TableCell>
                  <TableCell>{moment(user.createdAt).format('DD-MM-YYYY')}</TableCell>
                  
                   <TableCell className="flex gap-3">
                    
                    <Button onClick={()=>handleDelete(user._id)} 
                    variant="outline" className="text-red-500 hover:bg-black hover:text-white" >
                    <FaRegTrashAlt />
                     </Button>
                  </TableCell>
                </TableRow>
                 )
                  :
                <TableRow>
                  <TableCell colSpan="3">
                    Data not found
                  </TableCell>
                </TableRow>
               }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default User;
