import { atom } from 'jotai'

export type IsPageLoadingAtomType = boolean

export const isPageLoadingAtom = atom<IsPageLoadingAtomType>(false)
