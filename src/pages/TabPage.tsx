import { Suspense, lazy } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Loader from 'src/components/Loader'
import NotFoundRedirect from 'src/components/NotFoundRedirect'
import { TabType } from 'src/types/shared'

const TabPage = () => {
  const { id } = useParams()
  const tabs: TabType[] = useOutletContext()
  const currentTab: TabType[] | [] = tabs.filter((tab) => tab.id === id)

  if (!currentTab[0]) return <NotFoundRedirect />

  const Tab = lazy(() => import(`src/components/${currentTab[0]?.path}`))

  return (
    <Suspense fallback={<Loader />}>
      <Tab />
    </Suspense>
  )
}

export default TabPage
