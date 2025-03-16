import { queryOptions } from "@tanstack/react-query";

export default function createTodoQueryOptions() {
    return queryOptions({
        queryKey: ['todos'],
        queryFn: getComments
      });
}

const getComments = async (): Promise<Comment[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?id=${10}`);
  
    return await response.json();
  }

  type Comment = {
    postId: Number,
    id: String,
    email:String,
    body: String
  }