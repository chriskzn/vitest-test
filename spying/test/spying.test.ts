import { test, expect, vi } from 'vitest'
import { greeting } from '../src'

test('greeting', ()=> {
    // expect(greeting('World')).toBe(undefined)
    // expect(greeting('Anthony')).toBe(undefined)
    const spy = vi.spyOn(console, 'log')
    greeting('World')
    expect(spy).toBeCalledWith('Hello, World')
    expect(spy).toBeCalledTimes(1)
})