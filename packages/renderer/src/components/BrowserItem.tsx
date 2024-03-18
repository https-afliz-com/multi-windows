import React from 'react';
import {Rnd} from 'react-rnd';

const BrowserItem = ({data}: {data: any}) => {
  // console.log('=================', data);
  return (
    <>
      <Rnd
        default={{
          x: 150,
          y: 205,
          width: 1920,
          height: 600,
        }}
        style={{
          backgroundColor: 'red',
        }}
        enableUserSelectHack
      >
        {/* <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <div
            style={{
              backgroundColor: 'yellow',
              position: 'absolute',
              width: '100%',
              height: '64px',
              top: '-64px',
            }}
          >
            Header
          </div>
          <div style={{width: '100%', height: '100%'}}>
            <iframe
              src={url}
              frameBorder="0"
              style={{width: '100%', height: '100%'}}
            ></iframe>
          </div>
        </div> */}

        <div
          style={{backgroundColor: 'white', height: '100%'}}
          dangerouslySetInnerHTML={{__html: data}}
        ></div>
      </Rnd>
    </>
  );
};

export default BrowserItem;
