var trash = document.getElementsByClassName("fa-trash");

const login = document.querySelector('.loginBut')




var trash = document.getElementsByClassName("fa-trash");

document.querySelector('.submit').addEventListener('click', ()=>{
  const company = document.querySelector('.company').value
  const title = document.querySelector('.title').value
  const desc = document.querySelector('.details').value
  const loc = document.querySelector('.location').value
  const urg = document.querySelector('.urgent').value

  console.log(company);
  console.log(title);
  console.log(desc);
  console.log(loc);
  console.log(urg);

  fetch('createpost', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'company': company,
      'title': title,
      'description': desc,
      'location': loc,
      'urgent':urg
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })



})

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(e){

        const title = e.target.nextSibling.childNodes[0].innerText
        const company = e.target.nextSibling.childNodes[1].innerText
        const location = e.target.nextSibling.childNodes[2].innerText
        const description = e.target.nextSibling.childNodes[3].innerText
        const urgent = e.target.nextSibling.childNodes[4].innerText

        console.log('hi');
        console.log(title);
        console.log(company);
        console.log(description);
        console.log(location);
        console.log(urgent);

        fetch('deletepost', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'company': company,
            'title': title,
            'description': description,
            'location': location,
            'urgent':urgent
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
