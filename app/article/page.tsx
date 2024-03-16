import Link from 'next/link'
import React from 'react'

type Props = {
    
}

export default function page({}: Props) {
  return (
      <div>
          <ul>
              <li>
                  <Link href='/article/1' >
                   Article 1
                  </Link>
              </li>
              <li>
                  <Link href='/article/2' >
                   Article 2
                  </Link>
              </li>
              <li>
                  <Link href='/article/3' >
                   Article 3
                  </Link>
              </li>
          </ul>
    </div>
  )
}