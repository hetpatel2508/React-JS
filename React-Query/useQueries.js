import { useQueries } from 'react-query';

const queries = [
  { queryKey: 'todos', queryFn: () => fetch('/api/todos').then(res => res.json()) },
  { queryKey: 'posts', queryFn: () => fetch('/api/posts').then(res => res.json()) },
  { queryKey: 'users', queryFn: () => fetch('/api/users').then(res => res.json()) },
];

// const results = useQueries(queries);
        //or
const results = useQueries(queries, {
  enabled: true, // Whether to fetch data immediately or wait for manual trigger
  refetchInterval: 5000, // Refetch every 5 seconds
});


results.map(({ data, error, isLoading }) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
});