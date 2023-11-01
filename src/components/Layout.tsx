import { NavLink, useLoaderData } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { ROUTE_PATHS } from 'src/constants/routePaths.constant'
import { TabType } from 'src/types/shared'

const Layout = () => {
  const tabs = useLoaderData() as TabType[]

  return (
    <>
      <div id="sidebar">
        <h1>Tabs</h1>
        <nav>
          <ul>
            <li>
              <NavLink to={ROUTE_PATHS.root}>Home</NavLink>
            </li>
            {tabs.map((tab) => (
              <li key={tab.id}>
                <NavLink to={`${ROUTE_PATHS.tabs}/${tab.id}`}>{tab.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <main id="detail">
        <Outlet context={tabs} />
      </main>
    </>
  )
}

export const layoutLoader = async () => {
  let tabs = null

  try {
    const response = await fetch('/data/tabs.json')
    const decoded = (await response.json()) as TabType[]

    tabs = decoded.sort((a, b) => a.order - b.order)
  } catch (error) {
    console.error('tabs data not found, error -->', error)
  }

  return tabs
}

export default Layout
