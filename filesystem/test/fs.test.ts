import { test, expect, vi } from 'vitest'
import { loadConfig } from '../src/fs'

// vi.mock('fs', async (importOriginal) => {
//     const actual = await importOriginal() as typeof import('fs')
//     return {
//         ...actual,
//         readFileSync() {
//             return '{ "name": "mocked" }'
//         }
//     }
// })

vi.mock(import("fs"), async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...actual,
        readFileSync: vi.fn().mockReturnValue('{ "name": "mocked" }')
    }
})

test('with fs', async () => {
    const result = await loadConfig()
    expect(result).toEqual({ name: 'mocked' })
})