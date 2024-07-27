import Image from 'next/image';
import { ClipboardPlus, Database, Landmark, Layers3, LayoutDashboard, Settings, UserX } from 'lucide-react';
import Link from 'next/link';
import { ToggleButton } from '@/components/toggleButton';

export default function Home() {
  return (
    <div className='flex dark:bg-slate-800'>
      <div className="min-h-screen">
        <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:shadow-lg">
          <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <ul className="space-y-2 tracking-wide">
                <Link href='/' className="min-w-max bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600" >
                  <Image src='/logofmcamps.png' alt='logo' width={26} height={30} priority />
                  <span className="-mr-1 font-medium dark:text-white text-slate-400">Panel de control</span>
                </Link>

                <Link
                  href='/'
                  className="min-w-max bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                >
                  <Image src='/logofmcamps.png' alt='logo' width={26} height={30} priority />
                  <span className="-mr-1 dark:text-white text-slate-400">Sysadmin</span>
                </Link>

                {/* seleccionado */}
                <Link
                  href='/'
                  className="min-w-max bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                >
                  <UserX className='hover:text-cyan-300 dark:text-white text-slate-900' />
                  <span className="-mr-1 dark:text-white text-slate-400">Dashboard</span>
                </Link>
                {/*  */}

                <Link
                  href='/'
                  className="min-w-max bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                >
                  <Layers3 className='hover:text-cyan-300 dark:text-white text-slate-900' />
                  <span className="group-hover:text-gray-700 dark:text-white text-slate-400">Usuarios</span>
                </Link>
                <Link
                  href='/'
                  className="min-w-max group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                >
                  <ClipboardPlus className='hover:text-cyan-300 dark:text-white text-slate-900' />
                  <span className="group-hover:text-gray-700 dark:text-white text-slate-400">Operaciones</span>
                </Link>
                <Link
                  href='/'
                  className="min-w-max group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                >
                  <Database className='hover:text-cyan-300 dark:text-white text-slate-900' />
                  <span className="group-hover:text-gray-700 dark:text-white text-slate-400">Permisos</span>
                </Link>
                <Link
                  href='/'
                  className="min-w-max group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                >
                  <Landmark className='hover:text-cyan-300 dark:text-white text-slate-900' />
                  <span className="group-hover:text-gray-700 dark:text-white text-slate-400">Configuraciones</span>
                </Link>
              </ul>
            </div>
            <div className="w-max -mb-3">
              <Link href='/' className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                <Settings className='hover:text-cyan-300 dark:text-white text-slate-900' />
                <span className="group-hover:text-gray-700 dark:text-white text-slate-400">Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToggleButton />
    </div>
  );
}
