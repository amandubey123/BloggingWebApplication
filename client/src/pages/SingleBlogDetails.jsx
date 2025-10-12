import Comment from "@/components/Comment";
import CommentCount from "@/components/CommentCount";
import CommentList from "@/components/CommentList";
import LikeCount from "@/components/LikeCount";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getEnv } from "@/helpers/getEnv";
import { useFetch } from "@/hooks/useFetch";
import { decode } from "entities";
import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
import user1 from "@/assets/image/user1.png";
import RelatedBlog from "@/components/RelatedBlog";


const SingleBlogDetails = () => {
  const { blog , category} = useParams();

  const { data, loading, error } = useFetch(
    `${getEnv("VITE_API_BASE_URL")}/blog/get-blog/${blog}`,
    {
      method: "get",
      credentials: "include",
    },[blog,category]
  );
  /*if(loading) return </Loading>*/

  return (
    <div className="md:flex-nowrap flex-wrap flex justify-between gap-20 text-white">
      {data && data.blog && (
        <>
          <div className="border rounded md:w-[110%] w-full p-5">
            <h1 className="text-2xl font-bold mb-5 ">{data.blog.title}</h1>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-5">
                <Avatar>
                  <AvatarImage src={data.blog.author?.avatar || user1} />
                </Avatar>
                <div>
                  <p className="font-bold">{data.blog.author?.name}</p>
                  <p>
                    Date: {moment(data.blog.createdAt).format("DD-MM-YYYY")}</p>
                </div>
              </div>
              <div className="flex justify-between items-center gap-5">
                <LikeCount  props={{blogid: data.blog._id}}/>
                <CommentCount props={{blogid: data.blog._id}} />
              </div>
            </div>
            <div className="my-5">
              <img src={data.blog.featuredImage} className="rounded h-70 transition-transform duration-200 hover:scale-105 hover:shadow-lg" />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: decode(data.blog.blogContent) || "",
              }}
            ></div>
            <div className="border-t mt-5 pt-5">
              <Comment props={{ blogid: data.blog._id }} />
            </div>
          </div>
        </>
      )}
      <div className="border rounded md:w-[40%] pl-2">
        <RelatedBlog props={{category: category,currentBlog:blog}} />
      </div>
    </div>
  );
};

export default SingleBlogDetails;
