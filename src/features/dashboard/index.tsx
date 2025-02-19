import { useFetch } from '@/hooks/use-fetch'

export default function Dashboard() {
  const { data, loading } = useFetch(() =>
    Promise.resolve({
      name: 'Huy',
      age: 25,
    })
  )

  return (
    <div>
      <h1>DASHBOARD</h1>
      <div>{JSON.stringify(loading)}</div>
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  )
}
