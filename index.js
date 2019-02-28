function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = 'b2d935f1f8a0d25f1b21ee47efb82ec8ea8ff3e1';
  return '1a3d00c7370b347b4a7bd71808b6f584e15d1f01';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks`
  fetch(url, {
   method: 'POST',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token 1a3d00c7370b347b4a7bd71808b6f584e15d1f01`
    }
   })
  .then(res => res.json())
  .then(json => console.log(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
    const url = 'https://api.github.com/repos/Joecleverman//js-ajax-fetch-lab/issues';
    const postData = {
      title: document.getElementById('title').value,
      body: document.getElementById('body').value
};

 fetch(url, {
   method: 'POST',
   body: JSON.stringify(postData),
   headers: {
    Authorization: `token ${getToken()}`
  }
  }).then(res => res.json()).then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const url = 'https://api.github.com/repos/Joecleverman/js-ajax-fetch-lab/issues';

  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}