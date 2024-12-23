import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, tittle, featuredImage }) {
  return (
    <>
      <Link to={`/post/${$id}`}>
        <div className="w-full rounded-xl px-4 py-5  bg-gray-900 text-gray-100">
          <div className="w-full justify-center mb-4">
            <img
              src={service.getFilePreview(featuredImage)}
              alt={tittle}
              className="rounded-xl"
            />
          </div>
          <h2 className="text-xl font-bold">{tittle}</h2>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
