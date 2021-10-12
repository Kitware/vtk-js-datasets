title: Scene Viewer
---

The Scene Explorer is a standalone single page web application that can be user to visualizer and explore 3D scene that have been exported with ParaView. The only requirement is the single [HTML] file without any web server along with a scene exported from
ParaView using this [macro].

[HTML]: https://kitware.github.io/vtk-js/examples/SceneExplorer/SceneExplorer.html
[macro]: https://raw.githubusercontent.com/Kitware/vtk-js/master/Utilities/ParaView/export-scene-macro.py

More can be found on that vtk.js application on its [original web site](https://kitware.github.io/vtk-js/examples/SceneExplorer.html).

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
[![dragon][dragon]](./scene_dragon.html)
[![earth][earth]](./scene_earth.html)
[![lidar][lidar]](./scene_lidar.html)
[![moyeu][moyeu]](./scene_moyeu.html)
[![singlepin][singlepin]](./scene_singlepin.html)
[![tbar][tbar]](./scene_tbar.html)
[![vessel_contours][vessel_contours]](./scene_vessel_contours.html)
[![vessel_streamlines][vessel_streamlines]](./scene_vessel_streamlines.html)
</div>


[dragon]: ./scene/dragon.jpg
[earth]: ./scene/earth.jpg
[lidar]: ./scene/lidar.jpg
[moyeu]: ./scene/moyeu.jpg
[singlepin]: ./scene/singlepin.jpg
[tbar]: ./scene/tbar.jpg
[vessel_contours]: ./scene/vessel-contours.jpg
[vessel_streamlines]: ./scene/vessel-streamlines.jpg
