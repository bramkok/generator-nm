import execa from 'execa';
import test from 'ava';
// import fn from './';

test('shows help screen with `--help`', async (t) => {
  const ret = await execa('./cli.js', ['--help'], { cwd: __dirname });
  t.regex(ret.stdout, /Usage/);
});

test('shows help screen with `-h`', async (t) => {
  const ret = await execa('./cli.js', ['-h'], { cwd: __dirname });
  t.regex(ret.stdout, /Usage/);
});
