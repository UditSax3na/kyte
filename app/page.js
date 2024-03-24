'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
  let router = useRouter();
  useEffect(() => {
    router.push('/login');
  }, []);
  return (
    <></>
  )
}

export default page

