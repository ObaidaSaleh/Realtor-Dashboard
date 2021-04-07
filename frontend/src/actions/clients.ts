// environment configutations
import ENV from './../config';
const API_HOST = ENV.api_host;

export const getClientsList = (setRows:any, user:any) => {
    // the URL for the request
    const url = `${API_HOST}/api/clients/` + user?.id;
    
    // Since this is a GET request, simply call fetch on the URL
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get clients");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            setRows(json.clients);
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a POST request with a new client
export const addClient = (nameField: any, emailField: any, tagField: any, rows: any, setRows: any, user: any) => {
    // the URL for the request
    const url = `${API_HOST}/api/clients/` + user?.id;

  const name = nameField.split(' ');
  // The data we are going to send in our request
  const client = {
    firstName: name[0],
    lastName: name.length === 2 ? name[1] : '',
    email: emailField,
    tags: tagField,
  };

  // Create our request constructor with all the parameters we need
  const request = new Request(url, {
    method: 'post',
    body: JSON.stringify(client),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });

  // Send the request with fetch()
  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        // return a promise that resolves with the JSON body
        return res.json();
      } else {
        alert('Could not add client');
      }
    })
    .then(function (json) {
      setRows([...rows, json]);
    })
    .catch((error) => {
      console.log(error);
    });
};


export const deleteClient = (clientId: any, rows: any, setRows: any, user: any) => {
    // the URL for the request
    const url = `${API_HOST}/api/clients/` + user?.id;

  const request = new Request(url, {
    method: 'delete',
  });

  // Send the request with fetch()
  fetch(request)
    .then((res) => {
      if (res.status === 204) {
        const newRows = rows.filter((row: any) => {
          return row._id !== clientId;
        });

        setRows([...newRows]);
      } else {
        alert('delete failed');
      }
    })
    .catch((error) => {
      console.log(error);
    });
};