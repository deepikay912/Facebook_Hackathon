/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== MODULES ===============================================================
import React from 'react';
import {Cell, CellBody, CellHeader, Input} from 'react-weui';
import PropTypes from 'prop-types';

const SCROLL_DURATION = 1000; // total duration in ms for scroll animation.

/**
 * lockScroll — Force scrollY position to bottom of viewport for duration.
 * @param   {Number} startTime - Start Time for locking scroll duration.
 * @returns {Undefined} .
 */
const lockScroll = (startTime) => {
  const deltaTime = Date.now() - startTime;
  const htmlElement = document.documentElement;
  const {scrollTo, scrollX, innerHeight} = window;

  scrollTo(scrollX, htmlElement.offsetHeight - innerHeight);

  if (deltaTime <= SCROLL_DURATION) {
    window.requestAnimationFrame(() => lockScroll(startTime));
  }
};

// The NewItem Input Field Component
const EventInfo = ({

}) => {
 


  return (
    <Cell id='new-item'>
      <CellHeader id='input-indicator' >
        <div className='weui-uploader__input-box' />
      </CellHeader>

      <CellBody>
        {/* Empty action attr enables 'Go' Submit Button on iOS Keyboard */}
        <Footer id='viewer-count'>
        <FooterText>
         Abhinav invited you to lunch at Chipotle point at 1PM.
        </FooterText>
      </Footer>

      </CellBody>
    </Cell>
  );
};

EventInfo.proptypes = {

};

export default EventInfo;
