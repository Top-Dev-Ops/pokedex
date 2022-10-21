import Link from 'next/link'
import { Fragment, useState, useContext, useCallback } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { DataContext } from '../contexts/data-context'
import { Bar3Icon, XMarkIcon, MagnifyingGlassIcon, PokemonIcon } from './icons'
import { debounce } from '../utils/util'

const navigation = {
  pages: [
    { name: 'All', href: '/' },
  ],
}

export default function Header() {
  const [open, setOpen] = useState(false)

  const { totalCount, search } = useContext(DataContext)

  const optimizedFn = useCallback(debounce(search), [])

  return (
    <div className="bg-stack-1 w-full border-b border-stack-2 fixed inset-x-0 top-0 z-50">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-60 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed w-full inset-0 bg-stack-3 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 top-16 z-60 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-stack-3 pb-12 shadow-xl">
                <div className="space-y-6 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-default">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <button
              type="button"
              className="rounded-md p-2 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open/Close menu</span>
              {open ? <XMarkIcon /> : <Bar3Icon />}
            </button>
            
            <div className="ml-4 flex lg:ml-0 lg:mr-4">
              <Link href="/">
                <a className="text-3xl font-bold">CybSafe</a>
              </Link>
            </div>

            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex items-center h-full space-x-8">
                {navigation.pages.map((page) => (
                  <Link href={page.href} key={page.name}>
                    <a className="text-lg font-semibold">
                      {page.name}
                    </a>
                  </Link>
                ))}
              </div>
            </Popover.Group>

            <div className="ml-auto flex items-center">
              <div className="relative w-80">
                <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                  <MagnifyingGlassIcon />
                </div>
                <input
                  type="text"
                  className="block bg-stack-4 p-2 pl-10 w-full text-sm text-primary rounded-lg border border-transparent focus:outline-none focus:border-primary"
                  placeholder="Search by name or number ..."
                  onChange={e => optimizedFn(e.target.value)}
                />
              </div>

              <div className="ml-4 flow-root lg:ml-6">
                <div className="group -m-2 flex items-center p-2">
                  <PokemonIcon />
                  <span className="ml-2 text-sm font-medium text-default">
                    {totalCount}
                  </span>
                  <span className="sr-only">items in total</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
