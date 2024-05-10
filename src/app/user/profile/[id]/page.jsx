export default function DynamicRouting({ params }) {
    console.log(params)
  return (
    <div>
      <h1>Dynsmic routing {params.id}  </h1>
    </div>
  )
}

