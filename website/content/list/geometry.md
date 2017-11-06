title: Geometry Viewer
---

The Geometry Viewer is a standalone single page web application that can be user to visualizer and explore VTP files. The only requirement is the single [HTML] file without any web server. This application can be use to load vtp file and use geometry rendering to render them.
The current vtp supported format is __ascii__, __binary__ and __binary+zlib__ compression.

[HTML]: https://kitware.github.io/vtk-js/examples/GeometryViewer/GeometryViewer.html

More can be found on that vtk.js application on its [original web site](https://kitware.github.io/vtk-js/examples/GeometryViewer.html).

<style>
  .gallery img {
    width: 50%;
    display: inline-block;
    padding: 2px;
  }
  .gallery br {
    display: none;
  }
</style>

<div class="gallery">
[![earth][earth]](./geometry_earth.html)
</div>


[earth]: ./geometry/earth.jpg
