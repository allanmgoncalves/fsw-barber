import { SearchIcon } from 'lucide-react'
import Image from 'next/image'

import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div>
      {/* header */}
      <Header />

      <div className="mx-auto max-w-screen-2xl px-5 py-6">
        <h2 className="text-xl font-bold">
          Olá, <span>Faça seu login!</span>
        </h2>
        <p>Sexta, 2 de Fevereiro</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full max-w-sm overflow-hidden rounded-xl">
          <Image
            src="/banner-home-schedule.svg"
            fill
            className="object-cover"
            alt="Agende nos melhores com FSW Barber"
          />
        </div>
      </div>
    </div>
  )
}
