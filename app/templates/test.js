import test from 'ava';
import fn from './';

test('title', t => {
	t.is(fn('salt'), 'salt & vinegar');
});
