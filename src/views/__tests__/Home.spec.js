import Home from '../Home.vue'
import Vue from 'vue'
import { mount } from '@vue/test-utils'

describe('Home view tests', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Home, createComponentMocks())
  })

  it('It mounts correctly', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
