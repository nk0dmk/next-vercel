import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function MapPage() {
  return (
    <MainLayout>
      <p>Map Page</p>
      <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
      </h1>
      <p className={'description'}>
      Get started by editing{' '}
      <code className={'code'}>pages/map/index.jsx</code>
      </p>
    </MainLayout>
  )
}
