$(document).ready(function () {
  let isDragging = false;
  let offset = {};

  $(".piece").on("mousedown", function (e) {
    isDragging = true;
    const $this = $(this);
    offset = {
      x: e.clientX - $this.position().left,
      y: e.clientY - $this.position().top,
    };

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    $(".piece").each(function () {
      const color = getRandomColor();
      $(this).css("background-color", color);
    });

    $(document).on("mousemove", function (e) {
      if (isDragging) {
        $this.css({
          left: e.clientX - offset.x,
          top: e.clientY - offset.y,
          position: "absolute",
        });
      }
    });

    $(document).on("mouseup", function () {
      isDragging = false;
      $(document).off("mousemove mouseup");
    });
  });

  $("#assemble").on("click", function () {
    $(".piece").each(function () {
      const pos = $(this).data("pos");
      const top = Math.floor(pos / 2) * 100;
      const left = (pos % 2) * 100;
      $(this).css({ top: top, left: left });
    });
  });
});
