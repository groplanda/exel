import $ from '@core/Dom.js';

export default function Resizer(target , $root) {
  const $resizer = $(target),
        $parent = $resizer.closest('[data-type="resizeble"]'),
        cords = $parent.getCords(),
        type = target.dataset.resize,
        sidePos = type === 'col' ? 'bottom' : 'right';

  let result, delta;

  $resizer.css({
    opacity: 1,
    [sidePos]: '-3000px'
  });

  document.onmousemove = e => {
    if(type === 'col') {
      $resizer.css({
        right: -delta + 'px',
      })
      delta = e.pageX - cords.right;
      result = delta + cords.width;
    } else {
      $resizer.css({
        bottom: -delta + 'px',
      })
      delta = e.pageY - cords.bottom;
      result = delta + cords.height;
    }
  }
  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;

    if(type === 'col') {
      $root
      .findAll(`[data-col="${$parent.data.col}"]`)
      .forEach(col => col.style.width = result + 'px');
    } else {
      $parent.css({ height: result + 'px' })
    }

    $resizer.css({
      opacity: 0,
      right: '0px',
      bottom: '0px'
    });
  }
}