import ThemeSwitcher from '@/components/themeswitcher'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function home() {
  return (
    <section>
      <ThemeSwitcher/>
      <div >
        <Button>test</Button>
        <h1 className='text-red-500 dark:text-blue-500'> test </h1>
      </div>
      
    </section>
  )
}
