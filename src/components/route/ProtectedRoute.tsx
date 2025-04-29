import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/auth'

const { unAuthenticatedEntryPath } = appConfig

const ProtectedRoute = () => {
    const { authenticated } = useAuth()

    const { pathname } = useLocation()

    const getPathName =
        pathname === '/'  

    

    return <Outlet />
}

export default ProtectedRoute
