"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface navbaritems{
  title : any,
  param: any
}


export default function Navbaritem({title,param}:navbaritems) {
  const searchParams= useSearchParams()
  const genre=searchParams.get('genre')
  return (
    <div>
      <Link
       className={`hover:text-amber-600 font-semibold ${genre === param ? 'underline':''}`}
      
      href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
