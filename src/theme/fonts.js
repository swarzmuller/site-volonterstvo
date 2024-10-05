import { Inter, Poppins } from 'next/font/google'

const inter = Inter({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  weight: ['600', '800'],
  variable: '--font-inter'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-poppins'
})
export {
  inter,
  poppins,
}
