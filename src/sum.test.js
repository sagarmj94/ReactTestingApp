import {sum} from './sum'

test("test case for sum function",()=>{
    let a=10;
    let b=20;
    let output=30
    expect(sum(a,b)).toBe(output);
});
test("test case for sum function 2",()=>{
    let a=100;
    let b=200;
    let output=300
    expect(sum(a,b)).toBe(output);
});