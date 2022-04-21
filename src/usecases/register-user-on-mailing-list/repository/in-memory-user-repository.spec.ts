import { UserData } from '../user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In Memory User Repository', () => {
  describe('#findUserByEmail', () => {
    it('should return null if user is not found', async () => {
      const users: UserData[] = []
      const userRepo = new InMemoryUserRepository(users)
      const user = await userRepo.findUserByEmail('any@email.com')
      expect(user).toBeNull()
    })

    it('should return user if exist in repository', async () => {
      const users: UserData[] = []
      const name = 'any name'
      const email = 'email@mail.com'
      const userRepo = new InMemoryUserRepository(users)
      await userRepo.add({ name, email })

      const user = await userRepo.findUserByEmail(email)
      expect(user.name).toBe(name)
    })
  })
})
