"use client"

import LoginForm from '../components/LoginForm';
import { AuthProvider } from '../contexts/authContext';
// import { checkRoute } from '@/utils/checkRoute';
// import { usePathname } from 'next/navigation';

export default function Login() {
  // const pathName = usePathname();
  // const isPublicPage = checkRoute(pathName!);
  
  return (
    <AuthProvider>
      <LoginForm/>
    </AuthProvider>
  )
}