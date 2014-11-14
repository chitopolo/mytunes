// LibraryView.js - Defines a backbone view class for the music library.
var TitleView = Backbone.View.extend({

  tagName: "div",

  initialize: function() {
    // this.render();
    this.$el.on('play', (function(){ this.model.play() }).bind(this));
// debugger;
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    // console.log(th.song);
    // debugger;
// debugger return this.$el.attr('src', this.model ? this.model.get('url') : '');
    this.$el.html('<h1>'+ this.model.get('title') +'</h1>');
  }

});
