const url = 'http://10.110.15.159/forum.php';

const payload = {
  post_author: 1,
  post_msg: 'nugget',
  post_submit: 'Post the message',
  post_topic_id: 1,
  token: '95f7bfe9cbf7168feafb7e1390d55aea'
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams(payload).toString()
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
