exports.definition = {
	config: {
		adapter: {
			type: "restapi",
			collection_name: "Course",
			idAttribute: "COURSE_ID"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			urlRoot:"http://petri.esd.usc.edu/socAPI/Courses/",
			setDir:function(dir){
				this.dir = dir;
			},
			url:function(){
				return this.urlRoot+ this.dir;
			}
		});
		return Collection;
	}
};