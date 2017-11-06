
const path = require('path');

module.exports = {
  baseUrl: '/vtk-js-datasets',
  work: './build-tmp',
  api: ['./api'],
  config: {
    title: 'vtk.js application with datasets',
    description: '"Visualization Toolkit for the Web."',
    subtitle: '"Enable scientific visualization to the Web."',
    author: 'Kitware Inc.',
    timezone: 'UTC',
    url: 'https://kitware.github.io/vtk-js-datasets',
    root: '/vtk-js-datasets/',
    github: 'kitware/vtk-js-datasets',
  },
  copy: [
    { src: '../data/*', dest: './build-tmp/public/data' },
    { src: '../viewers/*', dest: './build-tmp/public/apps' },
  ],
};
