import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getSortedPostsData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const responseData = await response.json();

  return responseData;
}

export async function getPostData(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const responseData = await response.json();
  console.log(responseData);
  return responseData;
}

export const getAllPostIds = () => {
  return [{ params: { id: "1" } }, { params: { id: "2" } }];
};
