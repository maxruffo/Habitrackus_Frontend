import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import CarouselComponent from "@/components/CarouselComponent.vue";

// eslint-disable-next-line no-undef
describe('Testing HomeView.vue', () => {
    const wrapper = mount(HomeView)

    // eslint-disable-next-line no-undef
    it('tells if HomeView text is correct', () => {
        // eslint-disable-next-line no-undef
        expect(wrapper.text()).toMatch('Welcome to HabitrackusRecognise your Bad-HabitsThe firs step should always be to recognise your Bad Habits firstHabitrackus will HelpHabitrackus is an Application that will Help you tracking your daily habitsPreviousNextStart')
    })

    // eslint-disable-next-line no-undef
    it('has card-carousel component', () => {
        const wrapper = mount(HomeView)
        const table = wrapper.findComponent(CarouselComponent)
        // eslint-disable-next-line no-undef
        expect(table.exists()).toBeTruthy()
    })


    // eslint-disable-next-line no-undef
})
