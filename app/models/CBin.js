exports.definition = {
	config: {
		adapter: {
			type: "restapi",
			collection_name: "CBin",
			//idAttribute:"SECTION_ID"
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
		});

		return Collection;
	}
};