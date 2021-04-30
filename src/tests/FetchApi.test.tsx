import {getTodos} from '../helpers/FetchApi';

export default describe('Test Fetches', ()=>{
    
    //Set the old env
    const OLD_ENV = process.env;

    beforeEach(() => {
        jest.resetModules() // This clears the cache
        process.env = { ...OLD_ENV }; // Make a copy of the env
      });
    
    afterAll(() => {
        process.env = OLD_ENV; // Restore old environment
    });

    it('Check the Fetch response', async () => {

        process.env.REACT_APP_BACKEND_API_URL='https://my-todolist-api.herokuapp.com'
        //expect.assertions(2);
        expect(getTodos).toBeDefined();
        const data = await getTodos(); //Call page 1
        expect(data instanceof Object).toBeTruthy();
        expect(data).toHaveProperty("success");
        expect(data.success).toBeDefined();
        expect(data).toHaveProperty("message");
        expect(data.message).toBeDefined();
        expect(data).toHaveProperty("results");
        expect(data.results).toBeDefined();
        expect(data.results instanceof Array).toBeTruthy();
        
    });


})