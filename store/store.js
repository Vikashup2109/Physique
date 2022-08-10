import create from 'zustand'

export const useStore = create(
    (set) => ({

        // Cart
        cart: {
            wheys :[]
        },

        // Add Whey to Cart
        addWhey: (data) =>
        set((state) => ({
            cart : {
                wheys: [...state.cart.wheys, data]
            }
        })), 

        // For Removing Items

        removeWhey: (index) =>
        set((state) => ({
            cart : {
                wheys: state.cart.wheys.filter((_, i) => i != index)
            }
        }))
    })
)