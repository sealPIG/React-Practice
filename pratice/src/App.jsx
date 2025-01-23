// Router, useNavigate

import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
// import Page3 from './Components/Page3';

import { Flex, Segmented } from 'antd';

function Application() {
  const navigate = useNavigate();

  const handleButtonClick = (pageName) => {
    navigate(pageName);
  };

  // return <Pagination current={current} onChange={onChange} total={50} />;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 name='Page 2' />} />
      </Routes>

      <Flex gap="small" align="flex-start" vertical style={{position:'fixed', bottom:'20px', left:'20px'}}>
        <Segmented options={[
          {
            label: (
              <div style={{ padding: 4 }}>Home</div>
            ),
            value: '/'
          },
          {
            label: (
              <div style={{ padding: 4 }}>Page1</div>
            ),
            value: '/page1'
          },
          {
            label: (
              <div style={{ padding: 4 }}>Page2</div>
            ),
            value: '/page2'
          },]}
          onChange={handleButtonClick} />
      </Flex>
    </>
  );
}

export default Application