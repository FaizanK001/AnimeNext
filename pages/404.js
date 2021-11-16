import Link from 'next/link'

const NoPage = () => {
  return (
    <div>
      <h1>This page cannot be found</h1>
      <h2>Head back to the homepage <Link href='/'>Here</Link></h2>
    </div>
  );
}

export default NoPage;