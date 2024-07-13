'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center'>
          {/* <div className='mb-2 h-14 w-14'>
            <LogoIcon />
          </div> */}
          <strong className='mx-2 select-none'>STOLDREW</strong>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <LangSwitcher />
      </div>
    </div>
  )
}
