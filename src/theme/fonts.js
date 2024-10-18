import { Inter, Poppins, Roboto } from 'next/font/google'

const inter = Inter({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  weight: ['300', '600', '800'],
  variable: '--font-inter'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-poppins'
})

const roboto = Roboto({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-roboto'
})
export {
  inter,
  poppins,
  roboto,
}
