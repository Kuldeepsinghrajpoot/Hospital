
import { AuthProvider } from '../Provider'
import Nav from './index'

export default function Layout({children}){
  return (
    <>
    <AuthProvider>
    <Nav/>
     
    {children}
    </AuthProvider>
    </>

  )
}
