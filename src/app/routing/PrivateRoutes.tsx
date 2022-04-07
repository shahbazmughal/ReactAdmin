import {FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {ListWrapper} from '../pages/list/ListWrapper'
import {ListAddWrapper} from '../pages/list/ListAddWrapper'
import {getCSSVariableValue} from "../../_metronic/assets/ts/_utils";

const PrivateRoutes = () => {

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='list/all' element={<ListWrapper />} />
        {/* <Route path='list/add' element={<ListAddWrapper />} /> */}
        {/* Lazy Modules */}
        <Route
          path='list/add'
          element={
            <SuspensedView>
              <ListAddWrapper />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC = ({children}) => {
    const baseColor = getCSSVariableValue('--bs-primary')
    TopBarProgress.config({
        barColors: {
            '0': baseColor,
        },
        barThickness: 1,
        shadowBlur: 5,
    });
    return <Suspense fallback={<TopBarProgress/>}>{children}</Suspense>
}

export {PrivateRoutes}
