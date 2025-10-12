import BlogCard from '@/components/BlogCard'
import { getEnv } from '@/helpers/getEnv'
import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import { useSearchParams } from 'react-router-dom'


const SearchResult = () => {

  const [seaechParams] = useSearchParams()
  const q = seaechParams.get('q')
  const {data: blogData,loading,error,} = useFetch(`${getEnv("VITE_API_BASE_URL")}/blog/search?q=${q}`, {
      method: "get",
      credentials: "include",
    });
  console.log(blogData)
  return (
    <>
    <div className='flex items-center gap-3 text-2xl text-black font-bold border-b pb-3 mb-5'>
         
        <h4>Search Result For: {q} </h4>
    </div>
    <div className="grid grid-cols-3 gap-10">
      {blogData && blogData.blog.length > 0 ? (
        blogData.blog.map((blog) => <BlogCard key={blog._id} props={blog} />)
      ) : (
        <div> Data not found</div>
      )}
    </div>
    </>
  )
}

export default SearchResult