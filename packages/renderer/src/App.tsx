import React, {useEffect, useRef} from 'react';
// import {Rnd} from 'react-rnd';
import {Space, NoPanArea} from 'react-zoomable-ui';
import BrowserItem from './components/BrowserItem';
import axios from 'axios';

export const App = () => {
  const [value, setValue] = React.useState('');
  const [browserList, setBrowserList] = React.useState<any>([]);
  const divRef = useRef<HTMLDivElement>(null);
  const [data, setData] = React.useState();

  const handleAdd = () => {
    setBrowserList([
      ...browserList,
      {
        id: Math.random(),
        url: value,
        components: (
          <BrowserItem
            key={Math.random()}
            url={value}
          />
        ),
      },
    ]);
    setValue('');
  };

  useEffect(() => {
    if (divRef.current) {
      const fetchData = async () => {
        const rest = await axios.get('https://vnexpress.net/');
        console.log(rest);
        setData(rest.data);
      };
      fetchData();
    }
  }, []);

  return (
    <>
      <div
        style={{width: '500px', height: '500px', position: 'relative'}}
        className="wrapper-content"
        ref={divRef}
      >
        {/* <div dangerouslySetInnerHTML={{__html: data}}></div> */}
        {/* <Space
          style={{border: 'solid 1px black', background: 'grey'}}
          onCreate={viewPort => {
            // viewPort.setBounds({x: [0, 800], y: [0, 600]});
            viewPort.camera.centerFitAreaIntoView({
              left: 0,
              top: 0,
              width: 1280,
              height: 720,
            });
          }}
        >
          <NoPanArea>
            {browserList.map((item: any) => {
              return item.components;
            })}
          </NoPanArea>
        </Space> */}
      </div>
      {/* <webview
        id="foo"
        src="https://www.bing.com"
        style={{display: 'inline-flex', width: '500px', height: '500px'}}
      ></webview>
      <iframe
        id="foo"
        src="https://www.wiki.org"
        style={{display: 'inline-flex', width: '500px', height: '500px'}}
        sandbox="allow-same-origin"
      ></iframe> */}
      <br />
      <div></div>
      {/* <div>aaaa</div> */}
      <div style={{border: '2px solid black', padding: '1rem'}}>
        <div>
          <label>Input URL: </label>
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </>
  );
};
