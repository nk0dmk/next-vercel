import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <p>Home Page</p>
      <h1 className={'title'}>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link>
      </h1>
      <h1 className={'title'}>
        Ir a <Link href="/contact" prefetch={false}>Contact</Link>
      </h1>
      <h1 className={'title'}>
        Ir a <Link href="/map">Map</Link>
      </h1>
      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.jsx</code>
      </p>
    </MainLayout>
  )
}
