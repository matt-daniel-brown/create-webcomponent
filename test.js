import test from 'ava';
import createWebcomponent from '.';

test('title', t => {
	t.throws(() => {
		createWebcomponent(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(createWebcomponent('unicorns'), 'unicorns & rainbows');
});
