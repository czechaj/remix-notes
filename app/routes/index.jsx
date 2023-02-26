import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <>
      <h1>Hello world</h1>
      <Link to={'/blog'}> Blog Page </Link>
    </>
  )
}
