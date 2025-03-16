
import { queryOptions } from "@tanstack/react-query";

export default function createCommentQueryOptions(id: Number) {
    return queryOptions({
        queryKey: ['todos'],
        queryFn: () => getTodos(id)
      });
}

const getTodos = async (id: Number): Promise<Todo[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?id=` + id);
  
    return await response.json();
  }

  type Todo = {
    userId: Number,
    id: Number,
    title:String,
    completed: Boolean
  }