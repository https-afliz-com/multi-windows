import React, {useEffect, useRef} from 'react';
// import {Rnd} from 'react-rnd';
import {Space, NoPanArea} from 'react-zoomable-ui';
import BrowserItem from './components/BrowserItem';
import axios from 'axios';

export const App = () => {
  const [value, setValue] = React.useState<any>('');
  const [browserList, setBrowserList] = React.useState<any>([]);
  const divRef = useRef<HTMLDivElement>(null);
  // const [data, setData] = React.useState();

  const handleAdd = async () => {
    const rest = await axios.get('https://coinmarketcap.com/currencies/ethereum/');
    // console.log(rest);
    const parser = new DOMParser();
    const doc = parser.parseFromString(rest.data, 'text/html');
    const head = doc.getElementsByTagName('head')[0].innerHTML;
    const realHead = document.getElementsByTagName('head')[0];
    realHead.innerHTML = head;
    const div = doc.querySelector(
      '#__next > div.sc-239620eb-1.eoMCkR.global-layout-v2 > div > div.cmc-body-wrapper > div > div > div.sc-aef7b723-0.sc-a6bd470-0.gavgYW.coin-stats',
    );
    console.log(div);
    const bounding = div?.getBoundingClientRect();
    console.log(bounding);
    // console.log(head);
    // setData(div?.innerHTML);

    setBrowserList([
      ...browserList,
      {
        id: Math.random(),
        url: value,
        components: <BrowserItem data={div?.innerHTML} />,
      },
    ]);
    setValue('');
  };

  // useEffect(() => {
  //   if (divRef.current) {
  //     const fetchData = async () => {
  //       const rest = await axios.get('https://vnexpress.net/');
  //       console.log(rest);
  //       const parser = new DOMParser();
  //       const doc = parser.parseFromString(rest.data, 'text/html');
  //       const head = doc.getElementsByTagName('head')[0].innerHTML;
  //       const realHead = document.getElementsByTagName('head')[0];
  //       realHead.innerHTML = head;
  //       const div = doc.querySelector('.section.section_topstory');
  //       console.log(head);
  //       // setData(div.innerHTML);
  //     };
  //     fetchData();
  //   }
  // }, []);

  console.log('value', value);

  return (
    <>
      <div
        style={{width: '1920', height: '1080px', position: 'relative'}}
        className="wrapper-content"
        ref={divRef}
      >
        {/* <div dangerouslySetInnerHTML={{__html: data}}></div> */}
        <Space
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
        </Space>
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
