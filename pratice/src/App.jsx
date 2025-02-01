// Router, useNavigate

import { useNavigate, Routes, Route } from 'react-router-dom'
import { Flex, Segmented } from 'antd'
import Home from './Components/Home'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import './Components/components.scss'

function Application() {
  const navigate = useNavigate()

  const handleButtonClick = (pageName) => {
    navigate(pageName)
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>

      <Flex gap="small" align="flex-start" vertical style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
        <Segmented
          onChange={handleButtonClick}
          options={[
            { label: (<div style={{ padding: 4 }}>Home</div>), value: '/' },
            { label: (<div style={{ padding: 4 }}>Page 1</div>), value: '/page1' },
            { label: (<div style={{ padding: 4 }}>Page 2</div>), value: '/page2' },
            { label: (<div style={{ padding: 4 }}>Page 3</div>), value: '/page3' }
          ]}
        />
      </Flex>
    </div>
  )
}

export default Application