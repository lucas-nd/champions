import { twMerge } from 'tailwind-merge'

const cnMerge = (...styles: string[]) => {
  return twMerge(styles)
}

export { cnMerge }