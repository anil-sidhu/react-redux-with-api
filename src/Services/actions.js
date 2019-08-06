export const login = (params) => (dispatch: any) => {
  // replace it with const url in another file
  // &&
  // replace it will you api 
  // for help check  config file in service folder 
  const url = "https://dummyapi.io/api/user/" + params

  //  use post method with login
  const data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
  
  let result = fetch(url, data)
  result.then((dataJson) => {
    dataJson.json().then((data) => {
   
      dispatch({
        type: "LOGIN",
        loginReply: data,
      })
    })
  })
}

