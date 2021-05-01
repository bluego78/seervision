//********************************************************************/
// Here you can find the calls to the API Service
// All the methos returns a *IFetchResponse* object where:
// status: true/false indicates the status of the call
// message: will include an eventual error or other messages
// results: will be always an Array of *ITodo* objects
//********************************************************************/

/* IMPORT NODE MODULES & COMPONENTS*/
import axios from 'axios';

/* IMPORT INTERFACES */
import IFetchResponse from '../Interfaces/IFetchResponse';
import ITodo from '../Interfaces/ITodo';

/* GET METHOD will return a promise of the fetch responde interface object */
export const getTodos = async () : Promise<IFetchResponse> => {

    //Obect that the method will always returns
    let response:IFetchResponse = {success: false, message:'', results:[]};

    //Get the parameters from environment variables
    let url:string = `${process.env.REACT_APP_BACKEND_API_URL}/todos`;
   
    //Do the call and return the response
    return await axios.get(`${url}`)
            .then((res) => {
                response.success = true;
                response.results = res.data;
                return response;
            })
            .catch((error) => {
                if (error.response) {
                  // Request made and server responded
                  //console.log(error.response.data);
                  //console.log(error.response.status);
                  //console.log(error.response.headers);
                  response.message = `${error.response} ${error.status} ${error.headers}`;
                } else if (error.request) {
                  // The request was made but no response was received
                  //console.log(error.request);
                  response.message = 'Errors during the request.';
                } else {
                  // Something happened in setting up the request that triggered an Error
                  //console.log('Error', error.message);
                  response.message = 'Unkown errors during the request.';
                }
                return response;
            });
}

/* POST METHOD will return a promise of the fetch responde interface object */
export const postTodo = async () : Promise<IFetchResponse> => {

  //Obect that the method will always returns
  let response:IFetchResponse = {success: false, message:'', results:[]};

  //Get the parameters from environment variables
  let url:string = `${process.env.REACT_APP_BACKEND_API_URL}/todos`;
 
  //Do the call and return the response
  return await axios.post(`${url}`,{text:' '})
          .then((res) => {
              response.success = true;
              response.results = [res.data];
              return response;
          })
          .catch((error) => {
              if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                response.message = `${error.response} ${error.status} ${error.headers}`;
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
                response.message = 'Errors during the request.';
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                response.message = 'Unkown errors during the request.';
              }
              return response;
          });
}

/* PUT METHOD will return a promise of the fetch responde interface object */
export const putTodo = async (todo:ITodo) : Promise<IFetchResponse> => {

  //Obect that the method will always returns
  let response:IFetchResponse = {success: false, message:'', results:[]};

  //Get the parameters from environment variables
  let url:string = `${process.env.REACT_APP_BACKEND_API_URL}/todos/${todo._id}`;
 
  //Do the call and return the response
  return await axios.put(`${url}`, todo)
          .then((res) => {
              response.success = true;
              response.results = [res.data];
              return response;
          })
          .catch((error) => {
              if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                response.message = `${error.response} ${error.status} ${error.headers}`;
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
                response.message = 'Errors during the request.';
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                response.message = 'Unkown errors during the request.';
              }
              return response;
          });
}