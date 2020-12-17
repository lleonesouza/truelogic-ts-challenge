require('dotenv').config()
const axios = require("axios")
const PORT = process.env.PORT || 5000
const address = `http://localhost:${PORT}`


describe('Route /add', () => {
    it('Should sum', async () => {

        const data = {
            array1: [1, 0, 5, 9],
            array2: [7, 9]
        }

        const res = await axios.post(`${address}/add`, data)

       
        expect(res.status).toBe(200)
        expect(res.data).toBeDefined()
        expect(res.data).toEqual([1, 1, 3, 8])
        

    })

    it('Should return Error when body is not an array', async () => {
        const data = {
            array1: 1059,
            array2: [7, 9]
        }

        try {
            await axios.post(`${address}/add`, data)
        } catch (error) {
            expect(error).toBeDefined()
        }

    })

    it("Should return Error when body is not an array of numbers", async () => {

        const data = {
            array1: [1, 0, "cinco", 9],
            array2: [7, 9]
        }

        try {
            await axios.post(`${address}/add`, data)
        } catch (error) {
            expect(error).toBeDefined()
        }
    })


})