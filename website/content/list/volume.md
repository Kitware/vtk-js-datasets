title: Volume Viewer
---

The Volume Viewer is a standalone single page web application that can be user to visualizer and explore VTI files. The only requirement is the single [HTML] file without any web server. This application can be use to load vti file and use volume rendering to render them.
The current vti supported format is __ascii__, __binary__ and __binary+zlib__ compression.

[HTML]: https://kitware.github.io/vtk-js/examples/VolumeViewer/VolumeViewer.html

### Editing the opacity transfer function

__With a mouse:__

- Double click:
  - create a gaussian at that given position and height with no bias.
- Right click
  - delete the gaussian underneath.
- Drag:
  - Bottom of a gaussian will adjust the width. From left to right will increase the width.
  - Middle of the gaussian will adjust the biais (x and y).
  - Top of the gaussian will adjust height.
  - Anywhere else will adjust its position.

__With touch:__

- Double Tap:
  - One finger: create a gaussian at that given position and height with no bias.
  - Two fingers: delete the gaussian underneath.
- Drag:
  - Bottom of a gaussian will adjust the width. From left to right will increase the width.
  - Middle of the gaussian will adjust the biais (x and y).
  - Top of the gaussian will adjust height.
  - Anywhere else will adjust its position.


More can be found on that vtk.js application on its [original web site](https://kitware.github.io/vtk-js/examples/VolumeViewer.html).


