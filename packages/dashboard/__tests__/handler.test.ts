import * as admin from 'firebase-admin'
import setupEnvironment from './helpers/setupEnvironment'

setupEnvironment()

admin.initializeApp({
  databaseURL: process.env.REALTIME_DATABASE_URL,
})

jest.mock('fs', () => {
  return {}
})

describe('Test E2E', () => {
  it('should test something', () => {
    expect(1 + 2).toBe(3)
  })
})
