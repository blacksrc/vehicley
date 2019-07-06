import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import './assets/Loading.scss';

/**
 * Loading component. It shows loading bar with the given text.
 *
 * @param string text
 */
const Loading = ({ text = `Loading` }) => {
  const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#e0bf6e'
    },
    barColorPrimary: {
      backgroundColor: '#b58f32'
    }
  })(LinearProgress);

  return (
    <div className="loading-component">
      <div className="text">{text}...</div>
      <ColorLinearProgress />
    </div>
  );
};

export default Loading;
