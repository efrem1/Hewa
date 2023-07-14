import axios from 'axios';
import {Platform, StatusBar} from 'react-native';

// export class Api {
//   static rootUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
//   static apiUrl = `${this.rootUrl}/api/v1`;

//   static async base() {
//     const instance = axios.create({
//       baseURL: this.apiUrl,
//       timeout: 50000,
//       withCredentials: true,
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'Cache-Control': 'no-cache',
//       },
//       transformRequest: [
//         (data, headers) => {
//           if (!data) {
//             return;
//           }

//           if (data.user && data.user.avatar) {
//             headers['Content-Type'] = 'multipart/form-data';

//             const formData = new FormData();

//             Object.keys(data.user).forEach(key => {
//               const newKey = key
//                 .split(/(?=[A-Z])/)
//                 .join('_')
//                 .toLowerCase();
//               formData.append(`user[${newKey}]`, data.user[key]);
//             });

//             return formData;
//           }

//           if (data.avatar) {
//             headers['Content-Type'] = 'multipart/form-data';
//             const formData = new FormData();
//             Object.keys(data).forEach(key => {
//               if (key !== 'avatar') {
//                 formData.append(`${key}`, data[key]);
//               } else {
//                 formData.append('avatar', {
//                   uri: data[key].uri,
//                   name: data[key].fileName,
//                   type: data[key].type,
//                 });
//               }
//             });
//             return formData;
//           }

//           if (data.images) {
//             headers['Content-Type'] = 'multipart/form-data';
//             const formData = new FormData();
//             Object.keys(data).forEach(key => {
//               if (key === 'images') {
//                 data[key].forEach((img, index) => {
//                   formData.append(`images[${index}]`, {
//                     uri: img.uri,
//                     name: img.fileName,
//                     type: img.type,
//                   });
//                 });
//               } else {
//                 formData.append(`${key}`, data[key]);
//               }
//             });
//             return formData;
//           }

//           return JSON.stringify(data);
//         },
//       ],
//     });
//     const api_token = storage.getString('token');
//     if (api_token) {
//       instance.defaults.headers.Authorization = `Bearer ${api_token}`;
//     }
//     if (Platform.OS === 'ios') {
//       StatusBar.setNetworkActivityIndicatorVisible(true);
//     }

//     return instance;
//   }

//   static async request(options) {
//     const base = await this.base();
//     return base.request(options).then(response => {
//       if (Platform.OS === 'ios') {
//         StatusBar.setNetworkActivityIndicatorVisible(false);
//       }
//       return response;
//     });
//   }

//   static async get(url, options) {
//     const base = await this.base();
//     return base.get(url, options).then(response => {
//       if (Platform.OS === 'ios') {
//         StatusBar.setNetworkActivityIndicatorVisible(false);
//       }
//       return response;
//     });
//   }

//   static async post(url, options, _config) {
//     const base = await this.base();
//     return base.post(url, options, _config).then(response => {
//       if (Platform.OS === 'ios') {
//         StatusBar.setNetworkActivityIndicatorVisible(false);
//       }
//       return response;
//     });
//   }

//   static async put(url, options) {
//     const base = await this.base();
//     return base.put(url, options).then(response => {
//       if (Platform.OS === 'ios') {
//         StatusBar.setNetworkActivityIndicatorVisible(false);
//       }
//       return response;
//     });
//   }

//   static async patch(url, options) {
//     const base = await this.base();
//     return base.patch(url, options).then(response => {
//       if (Platform.OS === 'ios') {
//         StatusBar.setNetworkActivityIndicatorVisible(false);
//       }
//       return response;
//     });
//   }

//   static async delete(url, options) {
//     const base = await this.base();
//     return base.delete(url, options).then(response => {
//       if (Platform.OS === 'ios') {
//         StatusBar.setNetworkActivityIndicatorVisible(false);
//       }
//       return response;
//     });
//   }

//   static handleError(error) {
//     if (error.request.status === 401) {
//       axios.CancelToken.source();
//       storage.clearAll();
//       startSignin();
//       // Alert.alert('Warning', 'New login in another device');
//       return;
//     }
//     const exceptionModel = ExceptionModel.createFromError(error);
//     Crashes.trackError(exceptionModel, null, null);

//     if (error.response) {
//       const {
//         email,
//         username: usernameError,
//         password,
//         message,
//       } = error.response.data.error
//         ? error.response.data.error
//         : error.response.data;
//       if (email && email instanceof Array) {
//         Snackbar.error(email[0]);
//       } else if (usernameError && usernameError instanceof Array) {
//         Snackbar.error(usernameError[0]);
//       } else if (password && password instanceof Array) {
//         Snackbar.error(password[0]);
//       } else if (message && typeof message === 'string') {
//         Snackbar.error(message);
//       }
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log('Error', error.message);
//     }
//     // console.log(error.config);
//   }
// }
