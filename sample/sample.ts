const FOO: string = 'foo'

console.log(FOO);

interface Sample {
  foo: string;
  bar: number;
}

class SampleClass implements Sample {
  foo = 'foo';
  bar = 1;
}