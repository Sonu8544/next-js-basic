import React from "react";

export default function CatchAll({ params }) {
  console.log(params);
  return <div>Catch all route...{params.post}</div>;
}
