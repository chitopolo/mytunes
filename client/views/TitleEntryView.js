// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var TitleEntryView = Backbone.View.extend({

  tagName: 'div',

  template: _.template('<h1>(<%= title %>)</h1>'),

  initialize: function(){
    this.listenTo(this.model, 'play', this.render);
  },

  // events: {
  //   click: function() {
  //       this.model.enqueue();
  //   }
  // },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
