var MODELS = {
  'model_mm1': {
    model: '{"until":14400,"seed":1234,"version":"1.0","objects":[{"x":102,"y":136,"type":"source","name":"source_1","out":"queue_1","model":{"lambda":0.25}},{"x":252,"y":93,"type":"queue","name":"queue_1","model":{"nservers":1,"mu":"1","maxqlen":"-1"}}]}'
  },

  'model_mm1feedback': {
    model: '{"until":14400,"seed":1234,"version":"1.0","objects":[{"x":399,"y":171,"type":"sink","name":"sink_1","model":null},{"x":257,"y":186,"type":"splitter","name":"splitter_1","out":["queue_1","sink_1"],"model":{"prob":"0.1"}},{"x":102,"y":136,"type":"source","name":"source_1","out":"queue_1","model":{"lambda":0.25}},{"x":210,"y":83,"type":"queue","name":"queue_1","out":"splitter_1","model":{"nservers":1,"mu":"1","maxqlen":"-1"}}]}'
  },

  'model_backforth': {
    model: '{"until":28800,"seed":1234,"version":"1.0","objects":[{"x":496,"y":128,"type":"sink","name":"sink_1","model":null},{"x":241,"y":187,"type":"queue","name":"queue_2","out":"splitter_2","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":379,"y":193,"type":"splitter","name":"splitter_2","out":["queue_1","sink_1"],"model":{"prob":0.5}},{"x":377,"y":93,"type":"splitter","name":"splitter_1","out":["sink_1","queue_2"],"model":{"prob":0.5}},{"x":228,"y":87,"type":"queue","name":"queue_1","out":"splitter_1","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":91,"y":84,"type":"source","name":"source_1","out":"queue_1","model":{"lambda":0.25}}]}'
  },

  'model_waterfall': {
    model: '{"until":14400,"seed":1234,"version":"1.0","objects":[{"x":82,"y":29,"type":"source","name":"source_1","out":"queue_1","model":{"lambda":0.25}},{"x":558,"y":341,"type":"sink","name":"sink_1","model":null},{"x":440,"y":281,"type":"queue","name":"queue_4","out":"sink_1","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":342,"y":211,"type":"queue","name":"queue_3","out":"queue_4","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":241,"y":144,"type":"queue","name":"queue_2","out":"queue_3","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":140,"y":76,"type":"queue","name":"queue_1","out":"queue_2","model":{"nservers":1,"mu":"1","maxqlen":"-1"}}]}'
  },

  'model_compile': {
    model: '{"until":28800,"seed":1234,"version":"1.0","objects":[{"x":526,"y":246,"type":"sink","name":"sink_1","model":null},{"x":272,"y":192,"type":"splitter","name":"splitter_3","out":["queue_1","queue_2"],"model":{"prob":0.5}},{"x":107,"y":36,"type":"source","name":"source_1","out":"queue_1","model":{"lambda":0.25}},{"x":456,"y":171,"type":"splitter","name":"splitter_2","out":["queue_1","sink_1"],"model":{"prob":0.5}},{"x":336,"y":187,"type":"queue","name":"queue_2","out":"splitter_2","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":212,"y":63,"type":"queue","name":"queue_1","out":"splitter_3","model":{"nservers":1,"mu":"1","maxqlen":"-1"}}]}'
  },

  'model_freeway': {
    model: '{"until":28800,"seed":1234,"version":"1.0","objects":[{"x":380,"y":2,"type":"source","name":"source_4","out":"queue_4","model":{"lambda":0.25}},{"x":255,"y":80,"type":"source","name":"source_3","out":"queue_3","model":{"lambda":0.25}},{"x":115,"y":181,"type":"source","name":"source_2","out":"queue_2","model":{"lambda":0.25}},{"x":8,"y":229,"type":"source","name":"source_1","out":"queue_1","model":{"lambda":0.25}},{"x":561,"y":105,"type":"sink","name":"sink_4","model":null},{"x":510,"y":198,"type":"sink","name":"sink_3","model":null},{"x":374,"y":287,"type":"sink","name":"sink_2","model":null},{"x":204,"y":336,"type":"sink","name":"sink_1","model":null},{"x":139,"y":287,"type":"splitter","name":"splitter_3","out":["queue_2","sink_1"],"model":{"prob":0.5}},{"x":299,"y":213,"type":"splitter","name":"splitter_2","out":["queue_3","sink_2"],"model":{"prob":0.5}},{"x":430,"y":137,"type":"splitter","name":"splitter_1","out":["queue_4","sink_3"],"model":{"prob":0.5}},{"x":463,"y":43,"type":"queue","name":"queue_4","out":"sink_4","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":327,"y":132,"type":"queue","name":"queue_3","out":"splitter_1","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":194,"y":207,"type":"queue","name":"queue_2","out":"splitter_2","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":31,"y":281,"type":"queue","name":"queue_1","out":"splitter_3","model":{"nservers":1,"mu":"1","maxqlen":"-1"}}]}'
  },

  'model_staytillend': {
    model: '{"until":28800,"seed":1234,"version":"1.0","objects":[{"x":554,"y":349,"type":"sink","name":"sink_5","model":null},{"x":515,"y":287,"type":"splitter","name":"splitter_4","out":["sink_4","sink_5"],"model":{"prob":0.5}},{"x":420,"y":216,"type":"splitter","name":"splitter_3","out":["sink_3","queue_4"],"model":{"prob":0.5}},{"x":319,"y":144,"type":"splitter","name":"splitter_2","out":["sink_2","queue_3"],"model":{"prob":0.5}},{"x":212,"y":83,"type":"splitter","name":"splitter_1","out":["sink_1","queue_2"],"model":{"prob":0.5}},{"x":561,"y":242,"type":"sink","name":"sink_4","model":null},{"x":457,"y":164,"type":"sink","name":"sink_3","model":null},{"x":362,"y":94,"type":"sink","name":"sink_2","model":null},{"x":65,"y":27,"type":"source","name":"source_1","out":"queue_1","model":{"lambda":0.25}},{"x":258,"y":28,"type":"sink","name":"sink_1","model":null},{"x":414,"y":281,"type":"queue","name":"queue_4","out":"splitter_4","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":316,"y":211,"type":"queue","name":"queue_3","out":"splitter_3","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":222,"y":139,"type":"queue","name":"queue_2","out":"splitter_2","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":112,"y":76,"type":"queue","name":"queue_1","out":"splitter_1","model":{"nservers":1,"mu":"1","maxqlen":"-1"}}]}'
  },

  'model_winner': {
    model: '{"until":28800,"seed":1234,"version":"1.0","objects":[{"x":350,"y":293,"type":"source","name":"source_2","out":"queue_3","model":{"lambda":0.25}},{"x":57,"y":288,"type":"source","name":"source_1","out":"queue_2","model":{"lambda":0.25}},{"x":539,"y":250,"type":"sink","name":"sink_3","model":null},{"x":294,"y":239,"type":"sink","name":"sink_2","model":null},{"x":371,"y":24,"type":"sink","name":"sink_1","model":null},{"x":225,"y":203,"type":"splitter","name":"splitter_3","out":["queue_1","sink_2"],"model":{"prob":0.5}},{"x":480,"y":211,"type":"splitter","name":"splitter_2","out":["queue_1","sink_3"],"model":{"prob":0.5}},{"x":380,"y":205,"type":"queue","name":"queue_3","out":"splitter_2","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":109,"y":198,"type":"queue","name":"queue_2","out":"splitter_3","model":{"nservers":1,"mu":"1","maxqlen":"-1"}},{"x":256,"y":85,"type":"queue","name":"queue_1","out":"sink_1","model":{"nservers":1,"mu":"1","maxqlen":"-1"}}]}'
  }
};
