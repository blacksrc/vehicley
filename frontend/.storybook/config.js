import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Loading.js');
  require('../stories/Section.js');
  require('../stories/Status.js');
}

configure(loadStories, module);
