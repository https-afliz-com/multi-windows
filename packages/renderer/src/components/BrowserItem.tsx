import React from 'react';
import {Rnd} from 'react-rnd';

const BrowserItem = ({url}: {url: string}) => {
  return (
    <>
      <Rnd
        default={{
          x: 150,
          y: 205,
          width: 300,
          height: 200,
        }}
        style={{
          backgroundColor: 'white',
        }}
        enableUserSelectHack
      >
        <div
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
        </div>
      </Rnd>
    </>
  );
};

export default BrowserItem;
