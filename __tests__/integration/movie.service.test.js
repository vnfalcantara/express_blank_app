const db = require('../../app/db/mongo')
const app = require('../../app/app')
const moviesMock = require('../__mocks__/movies.json')
const movieMock = require('../__mocks__/movie.json')
let movieService

describe('movie.service', () => {

  beforeAll(async done => {
    await db.connect()
    await app.loadModels()
    movieService = require('../../app/services/movie.service')

    await movieService.remove({})

    for (const movie of moviesMock)
      movieService.insert(movie)

    done()
  })

  test('insert', async done => {
    const newMovie = await movieService.insert(movieMock)

    expect(newMovie.title).toBe(movieMock.title)
    expect(newMovie.description).toBe(movieMock.description)
    expect(newMovie.gender.toObject()).toEqual(movieMock.gender)
    expect(newMovie.rank).toBe(movieMock.rank)

    done()
  })

  test('find', async done => {
    const movies = await movieService.find({})

    expect(Array.isArray(movies)).toBe(true)
    expect(movies.length).toBe(3)

    done()
  })

  test('findOne', async done => {
    const movie = await movieService.findOne({ title: movieMock.title })

    expect(movie.title).toBe(movieMock.title)
    expect(movie.description).toBe(movieMock.description)
    expect(movie.gender.toObject()).toEqual(movieMock.gender)
    expect(movie.rank).toBe(movieMock.rank)

    done()
  })

  test('count', async done => {
    const count = await movieService.count({})

    expect(count).toBe(3)

    done()
  })

  test('update', async done => {
    const oldMovie = await movieService.findOne({ title: movieMock.title })
    const update = { title: 'Mad Max 2', description: 'foo bar' }
    const updateStatus = await movieService.update({ title: movieMock.title }, update)
    const newMovie = await movieService.findOne({ title: update.title })

    expect(oldMovie.title).toBe(movieMock.title)
    expect(oldMovie.description).toBe(movieMock.description)
    expect(oldMovie.gender.toObject()).toEqual(movieMock.gender)
    expect(oldMovie.rank).toBe(movieMock.rank)

    expect(updateStatus.nModified).toBe(1)

    expect(newMovie.title).toBe(update.title)
    expect(newMovie.description).toBe(update.description)
    expect(newMovie.gender.toObject()).toEqual(movieMock.gender)
    expect(newMovie.rank).toBe(movieMock.rank)

    done()
  })

  test('remove', async done => {
    const { title } = moviesMock[0]

    const oldCount = await movieService.count({})
    const removeStatus = await movieService.remove({ title })
    const newCount = await movieService.count({})

    expect(oldCount).toBe(3)
    expect(removeStatus.deletedCount).toBe(1)
    expect(newCount).toBe(2)

    done()
  })

})