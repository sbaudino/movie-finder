import Search from '../Search.vue'
import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import mockMovies from '@/api/__mocks__/mockMovies'

describe('Search view tests', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Search, createComponentMocks())
    wrapper.setMethods({ searchMovies: jest.fn() })
  })

  it('It mounts correctly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('It displays slider wrapper', async () => {
    await wrapper.setData({
      totalMovies: mockMovies.length,
      moviesByPage: {
        1: mockMovies
      }
    })
    expect(wrapper.find('[data-test=slider-wrapper]').isVisible()).toBe(true)
  })

  it('It displays no movies text', async () => {
    await wrapper.setData({ totalMovies: 0 })
    expect(wrapper.find('[data-test=no-movies]').isVisible()).toBe(true)
  })
})
