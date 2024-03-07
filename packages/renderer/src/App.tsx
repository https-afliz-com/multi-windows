import React from 'react';
// import {Rnd} from 'react-rnd';
import {Space, NoPanArea} from 'react-zoomable-ui';
import BrowserItem from './components/BrowserItem';

export const App = () => {
  const [value, setValue] = React.useState('');
  const [browserList, setBrowserList] = React.useState<any>([]);

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

  return (
    <>
      <div
        style={{width: '1920px', height: '1080px', background: 'red', position: 'relative'}}
        className="wrapper-content"
      >
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
      <br />
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
