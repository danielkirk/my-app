import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import createTodoQueryOptions from '@/queryOptions/create-todo-query-options'
import createCommentQueryOptions from '@/queryOptions/create-comment-query-options';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: todos, isPending, error } = useSuspenseQuery(createTodoQueryOptions());

  const { data: comments } = useQuery({...createCommentQueryOptions(parseInt(todos[0].id))});

  if (error) {
    alert('something went bad')
  }

  return <div>
    <div>{isPending ? 'loading...' : JSON.stringify(todos[0].body)}</div>
    <div>{isPending ? 'loading...' : JSON.stringify(comments[0].title)}</div>
  </div>
}

