const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var from = 'Mike';
		var text = 'Hello there!!';

		var message = generateMessage(from, text);

		expect(message.from).toEqual(from);
		expect(message.text).toEqual(text);
		expect(message.createdAt).toBeA('number');
	});
});