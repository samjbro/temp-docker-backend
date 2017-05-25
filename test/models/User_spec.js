import mongoose from 'mongoose'
import { Mockgoose } from 'mockgoose'
import User from '../../models/User'
import { expect } from 'chai'

const mockgoose = new Mockgoose(mongoose)

describe('User model', () => {

  before(async () => {
    await mockgoose.prepareStorage()
    mongoose.connect('mongodb://localhost/docker-e2e');
  })

  it('saves a new user fine', async () => {
    await new User({ name: 'Juan' }).save()
    const count = await User.count()
    expect(count).to.be.equal(1)
  })

})