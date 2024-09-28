(function ($) {
  $.anwidget("an.TextArea", {
    options: {
      visible: true,
      disabled: false,
      val: "",
      position: "absolute",
    },
    _props: [
      "left",
      "top",
      "width",
      "height",
      "position",
      "transform-origin",
      "transform",
    ],
    _attrs: ["id", "disabled", "class"],
    getCreateOptions: function () {
      return $.extend(this.options, {
        id: "textarea" + _widgetID++,
      });
    },
    getCreateString: function () {
      return "<textarea>";
    },
    getProperties: function () {
      return this._props;
    },
    getAttributes: function () {
      return this._attrs;
    },
  });
})(jQuery);
