import { JOBS } from '../moksForTests'
import formatDate from '../src/lib/formatDate'

describe('formatDate function', () => {
  it('converts a timestamp into a date string', () => {
    expect(formatDate(JOBS[0].time)).toBe('Sat Apr 06 2019 19:29')
  })
})
