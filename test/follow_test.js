var fw = require('../index');
var assert = require("assert");
var nock = require("nock");

beforeEach(function(){
	nock('http://user.com')
	.get('/users/1')
	.reply(200, {
		id: "http://user.com/users/1",
		name: "Jimmy Page",
		profile: {
			avatar: "http://avatar.com/1"
		}
	});

	nock('http://avatar.com')
	.get('/1')
	.reply(200, { id: "http://avatar.com/1", media_url: "http://image.com/1" });
});


describe('follow', () => {
	describe('#fw', () => {
		var avatar = { media_uri: 'http://avatar1.com/image.svg' };

		it('should navigate through a shallow object', function* (){
			var model = { name: "Andrew", avatar: 'https://avatar.com/1' };

			yield fw(model, (model) => {
				assert.equal(model.avatar.media_uri, 'http://avatar1.com/image.svg')
			});

		});
	})
})
