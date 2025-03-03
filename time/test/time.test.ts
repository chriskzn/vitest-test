import { test, expect, vi } from 'vitest'

function getCurrentTime() {
    return new Date().toTimeString().slice(0, 5);
}

test('time', () => {
    // vi.setSystemTime(new Date('2000-1-1 14:13'))
    // expect(getCurrentTime()).toBe('14.13')
    // vi.useRealTimers()
    const date = new Date(1998, 11, 19)

vi.useFakeTimers()
vi.setSystemTime(date)

expect(Date.now()).toBe(date.valueOf())

vi.useRealTimers()
})